import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { useQuery, gql } from '@apollo/client';
import { Container, Row } from "reactstrap";
import { MENUITEMS } from "../../constant/menu";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import i18next from "../../constant/i18n";


// Define your GraphQL query
const GET_CATEGORIES = gql`
  query GetCategories {
    categories {
      id
      title
      title_ar
      image {
        url
      }
    }
  }
`;

const NavBar = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const selectedLanguage = i18next.language;
  const { loading, error, data } = useQuery(GET_CATEGORIES, {
    variables: {
      language: selectedLanguage
    }});
  const [navClose, setNavClose] = useState({ right: "0px" });

  // Handle loading and error states
  useEffect(() => {
    if (loading) {
      console.log('Loading categories...');
    }
    if (error) {
      console.error('Error fetching categories:', error.message);
    }
    if (data) {
      console.log('Fetched categories:', data);
    }
  }, [loading, error, data]);


  // Extract the categories from the data
  const categories = data?.categories || [];

  // Replace the hardcoded categories in your MENUITEMS with the fetched categories
  const updatedMenu = [...MENUITEMS];
  const categoriesIndex = updatedMenu.findIndex(item => item.title === 'Categories');
  
  if (categoriesIndex !== -1) {
    updatedMenu[categoriesIndex] = {
      title: "Categories",
      type: "sub",
      children: categories.map(category => ({
        title: (selectedLanguage == 'en') ? category.title : category.title_ar ,
        type: "link",
        path: `/categories/${category.id}`,
      })),
    };
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 750) {
        setNavClose({ right: "-410px" });
      }
      if (window.innerWidth < 1199) {
        setNavClose({ right: "-300px" });
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const openNav = () => {
    setNavClose({ right: "0px" });
    if (router.asPath === "/layouts/Gym") {
      document.querySelector("#topHeader").classList.add("zindex-class");
    }
  };

  const closeNav = () => {
    setNavClose({ right: "-410px" });
    if (router.asPath === "/layouts/Gym") {
      document.querySelector("#topHeader").classList.remove("zindex-class");
    }
  };

  const handleMegaSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    const submenu = event.target.parentNode.nextElementSibling;
    const isOpen = submenu.classList.contains("opensubmegamenu");

    document.querySelectorAll(".menu-content").forEach((value) => {
      value.classList.remove("opensubmegamenu");
    });

    if (!isOpen) {
      submenu.classList.add("opensubmegamenu");
    }
  };

  const [mainmenu, setMainMenu] = useState(MENUITEMS);

  useEffect(() => {
    const currentUrl = router.asPath;
    updatedMenu.filter((items) => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter((subItems) => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter((subSubItems) => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, [router.asPath]);

  const setNavActive = (item, categories) => {
    updatedMenu.filter((menuItem) => {
      if (menuItem !== item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true;
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = false;
          }
        });
      }
    });

    setMainMenu(updatedMenu);
  };

  // Click Toggle menu
  const toggletNavActive = (item) => {
    if (!item.active) {
      updatedMenu.forEach((a) => {
        if (updatedMenu.includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach((b) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
          if (!b.children) return false;
          b.children.forEach((c) => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }
    item.active = !item.active;
    setMainMenu(updatedMenu);
  };

  const openMblNav = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensubmenu"))
      event.target.nextElementSibling.classList.remove("opensubmenu");
    else {
      document.querySelectorAll(".nav-submenu").forEach(function (value) {
        value.classList.remove("opensubmenu");
      });
      document
        .querySelector(".mega-menu-container")
        .classList.remove("opensubmenu");
      event.target.nextElementSibling.classList.add("opensubmenu");
    }
  };

  return (
    <div>
      <div className="main-navbar">
        <div id="mainnav">
          <div className="toggle-nav" onClick={openNav.bind(this)}>
            <i className="fa fa-bars sidebar-bar"></i>
          </div>
          <ul className="nav-menu" style={navClose}>
            <li className="back-btn" onClick={closeNav.bind(this)}>
              <div className="mobile-back text-end">
                <span>Back navbar</span>
                <i className="fa fa-angle-right ps-2" aria-hidden="true"></i>
              </div>
            </li>
            {updatedMenu.map((menuItem, i) => {
              return (
                <li
                  key={i}
                  className={` ${menuItem.megaMenu ? "mega-menu" : ""}`}>
                  {menuItem.type == "link" ? (
                    <Link href={menuItem.path} className="nav-link">
                      {t(menuItem.title)}
                    </Link>
                  ) : (
                    <a className="nav-link" onClick={(e) => openMblNav(e)}>
                      {t(menuItem.title)}
                      <span className="sub-arrow"></span>
                    </a>
                  )}
                  {menuItem.children && !menuItem.megaMenu ? (
                    <ul className="nav-submenu">
                      {menuItem.children.map((childrenItem, index) => {
                        return (
                          <li
                            key={index}
                            className={`${
                              childrenItem.children ? "sub-menu " : ""
                            }`}>
                            {childrenItem.type === "sub" ? (
                              <a
                                href={null}
                                onClick={() => toggletNavActive(childrenItem)}>
                                {childrenItem.title}
                                {childrenItem.tag === "new" && (
                                  <span className="new-tag">new</span>
                                )}
                                <i className="fa fa-angle-right ps-2"></i>
                              </a>
                            ) : (
                              ""
                            )}
                            {childrenItem.type === "link" ? (
                              <Link href={`${childrenItem.path}`}>
                                {childrenItem.title}
                                {childrenItem.tag === "new" && (
                                  <span className="new-tag">new</span>
                                )}
                              </Link>
                            ) : (
                              ""
                            )}
                            {childrenItem.children ? (
                              <ul
                                className={`nav-sub-childmenu ${
                                  childrenItem.active ? "menu-open " : "active"
                                }`}>
                                {childrenItem.children.map(
                                  (childrenSubItem, key) => (
                                    <li key={key}>
                                      {childrenSubItem.type === "link" ? (
                                        <Link
                                          href={childrenSubItem.path}
                                          className="sub-menu-title">
                                          {childrenSubItem.title}
                                          {childrenSubItem.tag === "new" && (
                                            <span className="new-tag">new</span>
                                          )}
                                        </Link>
                                      ) : (
                                        ""
                                      )}
                                    </li>
                                  )
                                )}
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <>
                      {menuItem.type !== "link" && (
                        <div
                          className={`mega-menu-container${
                            menuItem.megaMenu ? "" : " opensubmenu"
                          }`}>
                          {menuItem.megaMenu === true ? (
                            <Container>
                              <Row>
                                {menuItem.children.map((megaMenuItem, i) => {
                                  return (
                                    <div
                                      className={`${
                                        menuItem.megaMenuType == "small"
                                          ? "col mega-box"
                                          : menuItem.megaMenuType == "medium"
                                          ? "col-lg-3"
                                          : menuItem.megaMenuType == "large"
                                          ? "col"
                                          : ""
                                      } `}
                                      key={i}>
                                      <div className="link-section">
                                        <div className="menu-title">
                                          <h5
                                            onClick={(e) =>
                                              handleMegaSubmenu(e)
                                            }>
                                            {megaMenuItem.title}
                                          </h5>
                                        </div>
                                        <div className="menu-content">
                                          <ul>
                                            {menuItem.title === "Elements"
                                              ? megaMenuItem.children.map(
                                                  (subMegaMenuItem, i) => {
                                                    return (
                                                      <li key={i}>
                                                        <Link
                                                          href={
                                                            subMegaMenuItem.path
                                                          }>
                                                          <>
                                                            <i
                                                              className={`icon-${subMegaMenuItem.icon}`}></i>
                                                            {
                                                              subMegaMenuItem.title
                                                            }
                                                          </>
                                                        </Link>
                                                      </li>
                                                    );
                                                  }
                                                )
                                              : megaMenuItem.children.map(
                                                  (subMegaMenuItem, i) => {
                                                    return (
                                                      <li key={i}>
                                                        <Link
                                                          href={
                                                            subMegaMenuItem.path
                                                          }>
                                                          {
                                                            subMegaMenuItem.title
                                                          }
                                                        </Link>
                                                      </li>
                                                    );
                                                  }
                                                )}
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </Row>
                            </Container>
                          ) : (
                            ""
                          )}
                        </div>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React, { Fragment, useEffect, useState } from "react";
import CopyRight from "./common/copyright";
import { Container, Col, Row, Collapse } from "reactstrap";
import {} from "../../services/script";
import LogoImage from "./../headers/common/logo";
import { gql, useMutation } from '@apollo/client';
import { toast, ToastContainer } from "react-toastify";

const ADD_NEWSLETTER = gql`
  mutation createNewsletter($email: String!) {
    createNewsletter(input: { data: { email: $email } }) {
      newsletter {
        id
        email
      }
    }
  }
`;


const   FooterFive = ({ layoutClass, logoName }) => {
  const [isOpen, setIsOpen] = useState();
  const [collapse, setCollapse] = useState(0);
  const [email, setEmail] = useState('');
  const [addNewsletterEmail] = useMutation(ADD_NEWSLETTER);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      await addNewsletterEmail({ variables: { email } });
      toast.success("Subscription successful!");
    } catch (error) {
      if (error.message.includes("Duplicate entry")) {
        toast.error("Email is already subscribed!");
      } else {
        console.error("Error subscribing to newsletter", error);
        toast.error("Failed to subscribe!");
      }
    }
  };
  const width = window.innerWidth <= 767;
  useEffect(() => {
    const changeCollapse = () => {
      if (window.innerWidth <= 767) {
        setCollapse(0);
        setIsOpen(false);
      } else setIsOpen(true);
    };

    window.addEventListener("resize", changeCollapse);

    return () => {
      window.removeEventListener("resize", changeCollapse);
    };
  }, []);

  return (
    <Fragment>
      <footer className="jewel-footer">
        <div className="white-layout">
          <section className="p-0 ">
            <Container fluid={true}>
              <Row className="footer-theme2 section-light footer-border">
                <Col>
                  <div className=" footer-block">
                    <div className="footer-container">
                      <div className={`footer-title ${isOpen && collapse == 1 ? "active" : ""}  footer-mobile-title`}>
                        <h4
                          onClick={() => {
                            setCollapse(1);
                            setIsOpen(!isOpen);
                          }}>
                          about
                          <span className="according-menu"></span>
                        </h4>
                      </div>
                      <Collapse isOpen={width ? (collapse === 1 ? isOpen : false) : true}>
                        <div className="footer-contant">
                          <div className="footer-logo">
                            <LogoImage logo={logoName} />
                          </div>
                          <div className="social-white">
                            <ul>
                              <li>
                                <a href="https://www.facebook.com/profile.php?id=100064799717687" target="_blank">
                                  <i className="fa fa-facebook" aria-hidden="true"></i>
                                </a>
                              </li>
                              {/* <li>
                                <a href="https://plus.google.com" target="_blank">
                                  <i className="fa fa-google-plus" aria-hidden="true"></i>
                                </a>
                              </li> */}
                              {/* <li>
                                <a href="https://twitter.com" target="_blank">
                                  <i className="fa fa-twitter" aria-hidden="true"></i>
                                </a>
                              </li> */}
                              <li>
                                <a href="https://www.instagram.com/seniorita.jewelry" target="_blank">
                                  <i className="fa fa-instagram" aria-hidden="true"></i>
                                </a>
                              </li>
                              {/* <li>
                                <a href="https://rss.com" target="_blank">
                                  <i className="fa fa-rss" aria-hidden="true"></i>
                                </a>
                              </li> */}
                            </ul>
                          </div>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </Col>
                <Col className="form-p p-0">
                  <div className="footer-block">
                    <div className="subscribe-white">
                      <h2 className="text-white">newsletter</h2>
                      <form onSubmit={handleSubscribe}>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <button type="submit" className="btn btn-solid black-btn">
                            subscribe
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className=" footer-block">
                    <div className="footer-container">
                      <div className={`footer-title ${isOpen && collapse == 2 ? "active" : ""} `}>
                        <h4
                          onClick={() => {
                            setCollapse(2);
                            setIsOpen(!isOpen);
                          }}>
                          store information
                          <span className="according-menu"></span>
                        </h4>
                      </div>
                      <Collapse isOpen={width ? (collapse === 2 ? isOpen : false) : true}>
                        <div className="footer-contant">
                          <ul className="contact-details">
                            <li>Multikart Demo Store, Demo store India 345-659</li>
                            <li>Call Us: 123-456-7898</li>
                            <li>
                              Email Us: <a href="#">Support@Fiot.com</a>
                            </li>
                            <li>Fax: 123456</li>
                          </ul>
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
        <div className="white-layout box-layout">
          <Container>
            <section className="small-section">
              <Row className="footer-theme2">
                <Col>
                  <div className="footer-link link-white">
                    <div className={`footer-title 	${isOpen && collapse == 3 ? "active" : ""} `}>
                      <h4
                        onClick={() => {
                          setCollapse(3);
                          setIsOpen(!isOpen);
                        }}>
                        my account
                        <span className="according-menu"></span>
                      </h4>
                    </div>
                    <Collapse isOpen={width ? (collapse === 3 ? isOpen : false) : true}>
                      <div className="footer-contant">
                        <ul>
                          <li>
                            <a href="/categories/14">Rings</a>
                          </li>
                          <li>
                            <a href="#">Necklaces</a>
                          </li>
                          <li>
                            <a href="#">Bracelets</a>
                          </li>
                          <li>
                            <a href="#">Earings</a>
                          </li>
                          <li>
                            <a href="#">Anklets</a>
                          </li>
                          <li>
                            <a href="#">Hand</a>
                          </li>
                          <li>
                            <a href="#">Sets</a>
                          </li>
                          <li>
                            <a href="#">Diamonds</a>
                          </li>
                          <li>
                            <a href="#">About us</a>
                          </li>
                          <li>
                            <a href="#">Contact us</a>
                          </li>

                        </ul>
                      </div>
                    </Collapse>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
        {/* <CopyRight layout={layoutClass} /> */}
      </footer>
    </Fragment>
  );
};

export default FooterFive;

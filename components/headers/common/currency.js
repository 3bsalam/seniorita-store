import React, { useContext } from "react";
import { useQuery, gql } from "@apollo/client";
import { Media } from "reactstrap";
import { useTranslation } from "react-i18next";
import language from "../../constant/langConfig.json";
import i18next from "../../constant/i18n";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";

const GET_CURRENCY = gql`
  query {
    getCurrency {
      currency
      name
      symbol
      value
    }
  }
`;

const Currency = ({ icon }) => {
  const { t } = useTranslation();
  const { data } = useQuery(GET_CURRENCY);
  const Context = useContext(CurrencyContext);
  const selectedCurrency = Context.currencyContext.selectedCurrency;

  console.log("data", data);

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  return (
    <li className="onhover-div mobile-setting">
      <div>
        <Media src={icon} className="img-fluid" alt="" />
        <i className="fa fa-cog"></i>
      </div>
      <div className="show-div setting">
        <h6>{t('language')}</h6>
        <ul>
          {language.map((item, i) => (
            <li key={i}>
              <a
                href={null}
                onClick={() => {
                  changeLanguage(item.val);
                }}>
                {t(item.lang)}
              </a>
            </li>
          ))}
        </ul>
        <h6>{t('currency')}</h6>
        <ul className="list-inline">
          {data &&
            data.getCurrency.map((cur, i) => (
              <li key={i}>
                <div onClick={() => selectedCurrency(cur)}>
                  {cur.symbol} {cur.currency}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
};

export default Currency;

import { useTranslation } from "react-i18next";
import KeyIcon from "../assets/key_large.png";
import ChevronDownIcon from "../assets/chevrons.png";
import CrossIcon from "../assets/cross.png";
import CheckIcon from "../assets/check.png";
import FallImage from "../assets/fall.svg";
import GrowthImage from "../assets/growth.svg";

export default function Reason() {
  const { t } = useTranslation();

  const disadvantages = [
    {
      title: t("reason_disadvantage_1"),
    },
    {
      title: t("reason_disadvantage_2"),
    },
    {
      title: t("reason_disadvantage_3"),
    },
    {
      title: t("reason_disadvantage_4"),
    },
    {
      title: t("reason_disadvantage_5"),
    },
    {
      title: t("reason_disadvantage_6"),
    },
  ];

  const avantages = [
    {
      title: t("reason_avantage_1"),
      description: t("reason_avantage_1_description"),
    },
    {
      title: t("reason_avantage_2"),
      description: t("reason_avantage_2_description"),
    },
    {
      title: t("reason_avantage_3"),
      description: t("reason_avantage_3_description"),
    },
    {
      title: t("reason_avantage_4"),
      description: t("reason_avantage_4_description"),
    },
    {
      title: t("reason_avantage_5"),
      description: t("reason_avantage_5_description"),
    },
    {
      title: t("reason_avantage_6"),
      description: t("reason_avantage_6_description"),
    },
  ];

  return (
    <div className="reason" id="for_whom_anchor">
      <div className="reason-container">
        <div className="reason-title-container">
          <img src={KeyIcon} />
          <p className="reason-container-title">{t("reason_title")}</p>
          <p className="reason-container-description">
            {t("reason_description")}
          </p>
        </div>

        <div className="reason-content">
          <div className="reason-disadvantages reason-content-item">
            <div>
              <div className="reason-content-title">
                <img src={CrossIcon} />
                <p> {t("reason_disadvantages_title")}</p>
              </div>
              <ul>
                {disadvantages.map((disadvantage) => (
                  <li className="reason-disadvantage">{disadvantage.title}</li>
                ))}
              </ul>
            </div>

            <img
              className="reason-image"
              style={{ right: 8 }}
              src={FallImage}
            />
          </div>

          <img style={{ marginLeft: 14 }} src={ChevronDownIcon} />

          <div className="reason-avantages reason-content-item">
            <div>
              <div className="reason-content-title">
                <img src={CheckIcon} />
                <p>{t("reason_avantages_title")}</p>
              </div>
              <ul className="reason-avantage">
                {avantages.map((avantage) => (
                  <li>{avantage.title}</li>
                ))}
              </ul>
            </div>

            <img
              className="reason-image"
              src={GrowthImage}
              style={{ right: -24 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

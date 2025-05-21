import SmileIcon from "../assets/smile.png";
import LockIcon from "../assets/lock.png";
import KeyIcon from "../assets/key_red.png";
import PenIcon from "../assets/pen.png";
import UserIcon from "../assets/users.png";
import UserPlusIcon from "../assets/user_plus.png";
import { useTranslation } from "react-i18next";

export default function WhoIsCustomer() {
  const { t } = useTranslation();

  const quantities = [
    {
      icon: <img src={SmileIcon} />,
      title: t("who_is_customer_title_1"),
      description: t("who_is_customer_description_1"),
    },
    {
      icon: <img src={LockIcon} />,
      title: t("who_is_customer_title_2"),
      description: t("who_is_customer_description_2"),
    },
    {
      icon: <img src={KeyIcon} />,
      title: t("who_is_customer_title_3"),
      description: t("who_is_customer_description_3"),
    },
    {
      icon: <img src={PenIcon} />,
      title: t("who_is_customer_title_4"),
      description: t("who_is_customer_description_4"),
    },
    {
      icon: <img src={UserIcon} />,
      title: t("who_is_customer_title_5"),
      description: t("who_is_customer_description_5"),
    },
    {
      icon: <img src={UserPlusIcon} />,
      title: t("who_is_customer_title_6"),
      description: t("who_is_customer_description_6"),
    },
  ];

  return (
    <div className="who-is-customer" id="hint_anchor">
      <div className="who-is-customer-container">
        <div className="who-is-customer-container-title">
          <p className="who-is-customer-container-title">
            {t("who_is_customer_title")}
          </p>
        </div>

        <div className="who-is-customer-quantities">
          {quantities.map((quantity) => (
            <div className="who-is-customer-quantity">
              {quantity.icon}
              <div>
                <pre className="who-is-customer-quantity-title">
                  {quantity.title}
                </pre>
                <pre className="who-is-customer-quantity-description">
                  {quantity.description}
                </pre>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useTranslation } from "react-i18next";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

export default function Init() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="main-content-init">
      <div className="main-content-init-shadow"></div>
      <div className="main-content-init-container">
        <div className="main-content-init-title">
          <p className="main-content-init-title-text">VIM Global</p>
          <pre className="main-content-init-title-description">
            {t("description")}
          </pre>

          <div className="main-content-init-actions">
            <Button
              text={t("demo")}
              variant="primary"
              size="medium"
              style={{ minWidth: "112px" }}
              onClick={() => {
                navigate("/boost-forum");
              }}
            />
            <Button
              text={t("register")}
              variant="red"
              size="medium"
              style={{ minWidth: "196px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

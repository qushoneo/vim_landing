import { useTranslation } from "react-i18next";
import Button from "./Button";

export default function WarsawExpo() {
  const { t } = useTranslation();
  return (
    <div className="warsaw-expo">
      <div className="warsaw-expo-container-blur" />
      <div className="warsaw-expo-container">
        <p>{t("networking_invite")}</p>
        <p>
          <b>BOOST Forum 2025</b>
        </p>

        <Button
          style={{ marginTop: 16 }}
          text={t("register")}
          variant="red"
          size="medium"
        />
      </div>
    </div>
  );
}

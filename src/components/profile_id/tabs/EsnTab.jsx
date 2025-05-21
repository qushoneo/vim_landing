import { useTranslation } from "react-i18next";
import BrainIcon from "../../../assets/brain_large.png";
import ProfileIdImage from "../../../assets/profile_id_image.png";

export default function ProfileIdTab() {
  const { t } = useTranslation();

  return (
    <div className="profile-id-tab">
      <div className="profile-id-tab__left">
        <img src={BrainIcon} style={{ height: 58 }} />
        <p className="profile-id-tab__left-title">Vim Profile ID</p>

        <p className="profile-id-tab__left-description">
          {t("profile_id_description")}
        </p>
        <ul>
          <li>{t("what_inside_1")}</li>
          <li>{t("what_inside_2")}</li>
          <li>{t("what_inside_3")}</li>
          <li>{t("what_inside_4")}</li>
          <li>{t("what_inside_5")}</li>
          <li>{t("what_inside_6")}</li>
          <li>{t("what_inside_7")}</li>
        </ul>
      </div>

      <div className="profile-id-tab__right">
        <img src={ProfileIdImage} />
      </div>
    </div>
  );
}

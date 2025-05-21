import { useTranslation } from "react-i18next";
import KeyIcon from "../../../assets/key_large.png";
import ProfileIdImage from "../../../assets/profile_id_image.png";

export default function ProfileIdTab() {
  const { t } = useTranslation();

  return (
    <div className="profile-id-tab">
      <div className="profile-id-tab__left">
        <img src={KeyIcon} style={{ height: 58 }} />
        <p className="profile-id-tab__left-title">Vim Profile ID</p>

        <p className="profile-id-tab__left-description">
          {t("profile_id_description")}
        </p>
        <ul>
          <li>{t("vim_profile_id_description_1")}</li>
          <li>{t("vim_profile_id_description_2")}</li>
          <li>{t("vim_profile_id_description_3")}</li>
          <li>{t("vim_profile_id_description_4")}</li>
          <li>{t("vim_profile_id_description_5")}</li>
        </ul>
      </div>

      <div className="profile-id-tab__right">
        <img src={ProfileIdImage} />
      </div>
    </div>
  );
}

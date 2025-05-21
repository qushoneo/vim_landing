import { useTranslation } from "react-i18next";
import alexey from "../assets/images/alexey.png";
import irina from "../assets/images/irina.png";
import sergey from "../assets/images/sergey.png";
import maria from "../assets/images/maria.png";
import oleg from "../assets/images/oleg.png";
import ekaterina from "../assets/images/ekaterina.png";

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = [
    {
      name: t("review_alexey_name"),
      avatar: alexey,
      review: t("review_alexey"),
      company: t("review_alexey_company"),
    },
    {
      name: t("review_irina_name"),
      avatar: irina,
      review: t("review_irina"),
      company: t("review_irina_company"),
    },
    {
      name: t("review_sergey_name"),
      avatar: sergey,
      review: t("review_sergey"),
      company: t("review_sergey_company"),
    },
    {
      name: t("review_maria_name"),
      avatar: maria,
      review: t("review_maria"),
      company: t("review_maria_company"),
    },
    {
      name: t("review_oleg_name"),
      avatar: oleg,
      review: t("review_oleg"),
      company: t("review_oleg_company"),
    },
    {
      name: t("review_ekaterina_name"),
      avatar: ekaterina,
      review: t("review_ekaterina"),
      company: t("review_ekaterina_company"),
    },
  ];

  return (
    <div className="reviews">
      <div className="reviews-container">
        <div className="reviews-title-container">
          <p className="reviews-title-container-title">{t("reviews_title")}</p>
          <p className="reviews-title-container-description">
            {t("reviews_description")}
          </p>
        </div>

        <div className="reviews-cards-container">
          {reviews.map((review) => (
            <div key={review.name} className="review-card">
              <div className="review-card-header">
                <p>{review.review}</p>
              </div>

              <div className="review-card-footer">
                <img
                  className="review-card-footer-avatar"
                  src={review.avatar}
                />
                <div className="review-card-footer__info">
                  <div className="review-card-footer-name">{review.name}</div>
                  <div className="review-card-footer-company">
                    {review.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

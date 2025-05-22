import Select from "react-select";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const languages = [
  { value: "ru", label: "RU" },
  { value: "en", label: "EN" },
];

export default function LanguageSelect({ className }) {
  const [selectedLanguage, setSelectedLanguage] = useState(
    JSON.parse(localStorage.getItem("language")) || languages[0]
  );

  const handleChange = (selectedOption) => {
    setSelectedLanguage(selectedOption);
    i18n.changeLanguage(selectedOption.value);
    localStorage.setItem("language", JSON.stringify(selectedOption));
  };

  return (
    <Select
      className={className}
      styles={{
        control: (base) => ({
          ...base,
          height: "40px",
          width: "90px",
          border: "1px solid #D9D9D9",
          borderRadius: "8px",
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: "none",
        }),
      }}
      isSearchable={false}
      value={selectedLanguage}
      onChange={handleChange}
      options={languages}
    />
  );
}

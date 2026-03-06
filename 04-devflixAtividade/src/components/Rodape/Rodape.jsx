import React from "react";
import { useTranslation } from "react-i18next";
import "./Rodape.module.css";

const Rodape = ({ children, link }) => {
  const { t } = useTranslation();

  return (
    <footer>
      <p>
        {t("madeWith")} 🤍 {t("by")}{" "}
        <a href={link} target="_blank">
          {children}
        </a>
      </p>
    </footer>
  );
};

export default Rodape;

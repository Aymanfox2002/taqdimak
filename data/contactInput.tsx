"use client"
import { useTranslation } from "react-i18next";

export const contactInput = () => {
  const { t } = useTranslation();
  const inputs = [
    {
      name: "username",
      label: t("contact.name.label"),
      placeholder: t("contact.name.placeholder"),
    },
    {
      name: "email",
      label: t("contact.email.label"),
      placeholder: t("contact.email.placeholder"),
    },
  ];

  return inputs;
};


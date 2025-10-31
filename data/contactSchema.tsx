import { TFunction } from "i18next";
import { z } from "zod";

const contactSchema = (t: TFunction) => {
  const formSchema = z.object({
    username: z
      .string()
      .min(2, { message: t("contact.errors.validation.username.min") })
      .max(50, { message: t("contact.errors.validation.username.max") }),
    email: z.email({ message: t("contact.errors.validation.email.invalid") }),
    message: z
      .string()
      .min(5, { message: t("contact.errors.validation.message.min") })
      .max(1000, {
        message: t("contact.errors.validation.message.max"),
      }),
  });

  return formSchema;
};

export default contactSchema;

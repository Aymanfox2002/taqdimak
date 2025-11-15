import { inferedSchema } from "@/types";
import { TFunction } from "i18next";
import { toast } from "sonner";

/**
 * 
 * Sends the contact form values to the backend and shows a toast
 * message based on the request result.
 * 
 * @async
 * @param {object} values - form field to submit.
 * @param {TFunction} t - Translation function.
 * @param {() => void} reset - Callback to reset the form after success.
 * @return {promise<void>} Resolves when the request and UI feedback are completed.
 */
export async function submitContactForm(
  values: inferedSchema,
  t: TFunction,
  reset: () => void
): Promise<void> {
  try {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error("Failed");

    toast(t("contact.errors.request.success.title"), {
      description: t("contact.errors.request.success.description"),
      action: {
        label: "Close",
        onClick: () => console.log("Undo"),
      },
      className: "bg-green-100",
    });
    reset();
  } catch (error) {
    toast(t("contact.errors.request.fail.title"), {
      description: t("contact.errors.request.fail.description"),
      action: {
        label: "Close",
        onClick: () => console.log("Undo"),
      },
      className: "bg-red-900",
    });
  }
}

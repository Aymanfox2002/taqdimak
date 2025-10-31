import { toast } from "sonner";

export async function submitContactForm(
  values: any,
  t: any,
  reset: () => void
) {
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




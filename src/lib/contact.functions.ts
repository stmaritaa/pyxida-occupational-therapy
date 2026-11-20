import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "./contact.schema";

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      parent_name: data.parentName,
      phone: data.phone,
      email: data.email || null,
      child_age: data.childAge || null,
      concerns: data.concerns,
      message: data.message || null,
    });
    if (error) {
      console.error("contact insert failed", error.message);
      return { ok: false as const };
    }
    return { ok: true as const };
  });

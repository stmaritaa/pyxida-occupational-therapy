import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact.schema";

const base = { parentName: "Μαρία", phone: "6900000000", email: "", childAge: "", concerns: [], message: "" };

describe("contact form rules", () => {
  it("requires a phone number so the practice can call back", () => {
    expect(contactSchema.safeParse({ ...base, phone: "" }).success).toBe(false);
  });
  it("requires the parent's name", () => {
    expect(contactSchema.safeParse({ ...base, parentName: "" }).success).toBe(false);
  });
  it("accepts a request with only name and phone", () => {
    expect(contactSchema.safeParse(base).success).toBe(true);
  });
});

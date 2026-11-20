import { z } from "zod";

export const childAges = ["0–3 ετών", "3–6 ετών", "6–9 ετών", "9–12 ετών", "12+ ετών"] as const;

export const concernOptions = [
  "Αισθητηριακή επεξεργασία",
  "Λεπτή κινητικότητα / γραφή",
  "Αδρή κινητικότητα / συντονισμός",
  "Αυτοεξυπηρέτηση",
  "Συναισθηματική ρύθμιση",
  "Προσοχή & οργάνωση",
  "Δεν είμαι σίγουρος/η",
] as const;

export const contactSchema = z.object({
  parentName: z
    .string()
    .trim()
    .min(2, { message: "Γράψτε το όνομά σας" })
    .max(100, { message: "Έως 100 χαρακτήρες" }),
  phone: z
    .string()
    .trim()
    .regex(/^[+0-9\s()-]{10,20}$/, { message: "Γράψτε ένα έγκυρο τηλέφωνο" }),
  email: z
    .string()
    .trim()
    .max(255)
    .email({ message: "Μη έγκυρο email" })
    .or(z.literal("")),
  childAge: z.enum(childAges).or(z.literal("")),
  concerns: z.array(z.enum(concernOptions)).max(concernOptions.length),
  message: z.string().trim().max(1500, { message: "Έως 1500 χαρακτήρες" }),
});

export type ContactInput = z.infer<typeof contactSchema>;

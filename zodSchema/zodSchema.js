import { z } from "zod";

export const createUserSchema = z.object({
      name: z
        .string()
        .trim()
        .min(1, "Name is required"),

    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .email("Invalid email address"),

    phone: z
        .string()
        .trim()
        .min(1, "Phone is required")
        .regex(
            /^[6-9][0-9]{9}$/,
            "Invalid phone number"
        ),

    notificationType: z
        .string()
        .trim()
        .min(1, "Notification type is required")
});

export const updateUserSchema = createUserSchema.partial();

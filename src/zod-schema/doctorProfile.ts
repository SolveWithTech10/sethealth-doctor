import { z } from "zod";

export const doctorProfileSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  degree: z.string().min(1, "Degree is required"),
  services: z.string().min(1, "At least one service is required"),
  experience: z.number().min(0, "Experience must be a positive number"),
  currentOrganization: z.string().optional(),
  description: z.string().optional(),
  availableTimingSlots: z.object({
    timings: z
      .array(
        z.object({
          from: z.string().min(1, "From time is required"),
          to: z.string().min(1, "To time is required"),
          servicesType: z
            .string()
            .min(1, "At least one service type is required"),
          PatientsToSee: z
            .number()
            .min(1, "Number of patients must be at least 1"),
        })
      )
      .min(1, "At least one timing slot is required"),
    weekdays: z.array(z.string()).min(1, "At least one weekday is required"),
  }),
  price: z
    .array(
      z.object({
        serviceType: z.string().min(1, "Service type is required"),
        rate: z.number().min(0, "Rate must be a positive number"),
      })
    )
    .min(1, "At least one price entry is required"),
  clinicAddress: z.object({
    pin: z.string().min(6, "PIN code must be 6 digits"),
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
    nearBy: z.string().optional(),
  }),
});

export type DoctorProfileFormValues = z.infer<typeof doctorProfileSchema>;

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Stethoscope,
  User,
  Phone,
  GraduationCap,
  Briefcase,
  Clock,
  MapPin,
  DollarSign,
} from "lucide-react";

const doctorProfileSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  degree: z.string().min(1, "Degree is required"),
  services: z
    .array(
      z.object({
        serviceId: z.string().min(1, "Service ID is required"),
        serviceTypes: z
          .array(z.string())
          .min(1, "At least one service type is required"),
      })
    )
    .min(1, "At least one service is required"),
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
            .array(z.string())
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
    pin: z
      .number()
      .min(100000, "PIN code must be 6 digits")
      .max(999999, "PIN code must be 6 digits"),
    state: z.string().min(1, "State is required"),
    city: z.string().min(1, "City is required"),
    nearBy: z.string().optional(),
  }),
});

type DoctorProfileFormValues = z.infer<typeof doctorProfileSchema>;

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function DoctorProfileForm() {
  const form = useForm<DoctorProfileFormValues>({
    resolver: zodResolver(doctorProfileSchema),
    defaultValues: {
      phone: "",
      degree: "",
      services: [{ serviceId: "", serviceTypes: [] }],
      experience: 0,
      currentOrganization: "",
      description: "",
      availableTimingSlots: {
        timings: [{ from: "", to: "", servicesType: [], PatientsToSee: 1 }],
        weekdays: [],
      },
      price: [{ serviceType: "", rate: 0 }],
      clinicAddress: {
        pin: undefined,
        state: "",
        city: "",
        nearBy: "",
      },
    },
  });

  function onSubmit(data: DoctorProfileFormValues) {
    console.log(data);
    // Here you would typically send the data to your backend
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <Stethoscope className="w-6 h-6" />
          Doctor Profile
        </CardTitle>
        <CardDescription>Complete your profile to get started</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-blue-500" />
                      Phone
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="degree"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-blue-500" />
                      Degree
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter degree" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                      Experience (years)
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentOrganization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                      Current Organization
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter current organization"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <User className="w-4 h-4 text-blue-500" />
                    Description
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter description"
                      {...field}
                      className="h-32"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-600 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Available Timing Slots
              </h3>
              {form.watch("availableTimingSlots.timings").map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg"
                >
                  <FormField
                    control={form.control}
                    name={`availableTimingSlots.timings.${index}.from`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>From</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`availableTimingSlots.timings.${index}.to`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>To</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`availableTimingSlots.timings.${index}.servicesType`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Types</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter service types (comma-separated)"
                            {...field}
                            onChange={(e) =>
                              field.onChange(
                                e.target.value.split(",").map((s) => s.trim())
                              )
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`availableTimingSlots.timings.${index}.PatientsToSee`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Patients to See</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>

            <FormField
              control={form.control}
              name="availableTimingSlots.weekdays"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-base flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-500" />
                      Weekdays
                    </FormLabel>
                    <FormDescription>
                      Select the days you&apos;re available.
                    </FormDescription>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {weekdays.map((day) => (
                      <FormField
                        key={day}
                        control={form.control}
                        name="availableTimingSlots.weekdays"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={day}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(day)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, day])
                                      : field.onChange(
                                          field.value?.filter(
                                            (value) => value !== day
                                          )
                                        );
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {day}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-600 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Pricing
              </h3>
              {form.watch("price").map((_, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border rounded-lg"
                >
                  <FormField
                    control={form.control}
                    name={`price.${index}.serviceType`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter service type" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`price.${index}.rate`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Rate</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value))
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-600 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Clinic Address
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="clinicAddress.pin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>PIN Code</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) =>
                            field.onChange(parseInt(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="clinicAddress.state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter state" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="clinicAddress.city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter city" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="clinicAddress.nearBy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nearby Landmark</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter nearby landmark" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={form.handleSubmit(onSubmit)}
        >
          Save Profile
        </Button>
      </CardFooter>
    </Card>
  );
}

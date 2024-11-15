import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Stethoscope } from "lucide-react";
import ProfileForm from "@/components/profile/ProfileForm";

export default function DoctorProfileForm() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <Stethoscope className="w-6 h-6" />
          Doctor Profile
        </CardTitle>
        <CardDescription>Complete your profile to get started</CardDescription>
      </CardHeader>
      <ProfileForm />
    </Card>
  );
}

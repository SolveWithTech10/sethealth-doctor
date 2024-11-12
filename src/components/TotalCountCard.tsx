import { TotalDataCardProptype } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const TotalCountCard = ({
  children,
  title,
  totalNumbers,
  growth,
  iconBgColor,
  iconBorderColor,
}: TotalDataCardProptype) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start space-y-0 gap-2 p-3">
        <div
          className={`p-3 rounded-md border-[1.6px] ${iconBorderColor} ${iconBgColor} `}
        >
          {children}
        </div>
        <div className="py-1">
          <CardTitle className="capitalize">Total {title} this month</CardTitle>
          <CardDescription className="subheading-text text-xs mt-1">Total {title} this month fkdf f djfd </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-3 pb-0">
        <p className="text-3xl font-bold">{totalNumbers}</p>
      </CardContent>
      <CardFooter className="p-3 pt-1">
        <p className="text-sm">{growth}% from last month</p>
      </CardFooter>
    </Card>
  );
};

export default TotalCountCard;

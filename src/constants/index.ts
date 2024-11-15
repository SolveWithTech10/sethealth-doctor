import { Activity, ClipboardPlus, Hospital, LayoutDashboard, PiggyBank, Users } from "lucide-react"

export const regExpressions = {
    password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/,
    stringOnly: /^[A-Za-z]/
}

export const sidebarItems = [
    {
        title:"Dashboard",
        icon: LayoutDashboard,
        url:"/",
    },
    {
        title:"Patients",
        icon: Users,
        url:"/patients",
    },
    {
        title:"Reports",
        icon: ClipboardPlus,
        url:"/reports",
    },
]

export const totalDataCountList = [
    {
      title: "patient",
      icon: Hospital,
      iconBgColor: "bg-blue-100",
      iconTextColor:"text-blue-500",
      iconBorderColor:"border-blue-500",
      growth: 25,
      totalNumbers: 30,
    },
    {
      title: "revenue",
      icon: PiggyBank,
      iconBgColor: "bg-green-100",
      iconTextColor:"text-green-500",
      iconBorderColor:"border-green-500",
      growth: 25,
      totalNumbers: 30,
    },
    {
      title: "appointment",
      icon: Activity,
      iconBgColor: "bg-yellow-100",
      iconTextColor:"text-yellow-500",
      iconBorderColor:"border-yellow-500",
      growth: 25,
      totalNumbers: 30,
    }
  ]


  export const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarItems } from "@/constants";
import { LogOut, UserCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const RootSidebar = () => {
  const location = usePathname();
  return (
    <Sidebar>
      <SidebarHeader>
        <h1>Logo</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={`${
                      location === item.url &&
                      "bg-primary text-white hover:bg-primary/90 hover:text-white"
                    }`}
                  >
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {/* {item?.isAddButton && item && (
                      <SidebarMenuAction
                        className={`${
                          location === item.url &&
                          "text-white hover:text-black"
                        }`}
                      > */}
                  {/* {item.title === "Doctors" && (
                          <InviteDoctorsModal hideTrigger>
                            <PlusCircle className="h-4 w-4" />
                          </InviteDoctorsModal>
                        )}
                        {item.title === "Services" && (
                          <AddServicesModal hideTrigger>
                            <PlusCircle className="h-4 w-4" />
                          </AddServicesModal>
                        )} */}
                  {/* </SidebarMenuAction> */}
                  {/* )} */}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
              <Link href={"/profile"}>
            <SidebarMenuButton>
                <UserCircle className="h-4 w-4"/>
                <span>Profile</span>
            </SidebarMenuButton>
              </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LogOut className="h-4 w-4"/>
              <span>Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default RootSidebar;

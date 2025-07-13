import { Sidebar, SidebarHeader, SidebarProvider, SidebarTrigger, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarGroup } from "@/components/ui/sidebar"
import { AppSidebarClient } from "@/app/_AppSidebarClient"
import Link from "next/link"
import { LogInIcon } from "lucide-react"
import { SignedOut } from "@/services/clerk/components/SignInStatus"
import { SidebarUserButton } from "@/features/users/components/SidebarUserButton"

export default function HomePage() {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
        <Sidebar collapsible="icon" className="overflow-hidden">
          <SidebarHeader className="flex-row">
            <SidebarTrigger />
            <span className="text-xl text-nowrap">Job Portal</span>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SignedOut>
                    <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <Link href="/sign-in">
                          <LogInIcon />
                          <span>Log In</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SignedOut>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarUserButton />
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <main className="flex-1">
          asdadfa
        </main>
      </AppSidebarClient>
  
    </SidebarProvider>
  )
}
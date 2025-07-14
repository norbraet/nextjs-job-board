import { Sidebar, SidebarHeader, SidebarProvider, SidebarTrigger, SidebarContent, SidebarFooter, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"
import { AppSidebarClient } from "@/components/sidebar/_AppSidebarClient"
import { SignedIn } from "@/services/clerk/components/SignInStatus"
import { ReactNode } from "react"

export function AppSidebar({ content, footerButton, children }: {content: ReactNode, footerButton: ReactNode, children: ReactNode }) {
    return (
        <SidebarProvider className="overflow-y-hidden">
            <AppSidebarClient>
                <Sidebar collapsible="icon" className="overflow-hidden">
                    <SidebarHeader className="flex-row">
                    <SidebarTrigger />
                    <span className="text-xl text-nowrap">Job Portal</span>
                    </SidebarHeader>
                    <SidebarContent>
                        { content }
                    </SidebarContent>
                    <SignedIn>
                    <SidebarFooter>
                        <SidebarMenu>
                        <SidebarMenuItem>
                            { footerButton }
                        </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>
                    </SignedIn>
                </Sidebar>
                <main className="flex-1">
                    { children }
                </main>
            </AppSidebarClient>
        </SidebarProvider>
    )
}
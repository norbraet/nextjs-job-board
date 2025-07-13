"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { SignOutButton } from "@/services/clerk/components/AuthButtons"
import { useClerk } from "@clerk/nextjs"
import { ChevronsUpDown, Link, LogOutIcon, SettingsIcon, UserIcon } from "lucide-react"

type User = {
    name: string, 
    imageUrl: string
    email: string
}

export function SidebarUserButtonClient({ user }: { user: User}) {
    const { isMobile, setOpenMobile }  = useSidebar()
    const { openUserProfile } = useClerk()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                    <UserInfo {...user} />
                    <ChevronsUpDown className="ml-auto group-data-[state=collapsed]:hidden" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={4} align="end" side={isMobile ? "bottom" : "right"} className="min-w-64 max-w-80">
                <DropdownMenuLabel className="font-normal p-1">
                    <UserInfo {...user} />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => {
                    openUserProfile()
                    setOpenMobile(false)
                }}>
                    <UserIcon className="mr-1" />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/user-settings/notifications">
                        <SettingsIcon className="mr-1" /> Settings
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <SignOutButton>
                    <DropdownMenuItem>
                        <LogOutIcon className="mr-1" /> Log Out
                    </DropdownMenuItem>
                </SignOutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function UserInfo(user: User) {
    const nameInitials = user
    .name
    .split(" ")
    .slice(0, 2)
    .map(str => str[0])
    .join("") 

    return (
        <div className="flex items-center gap-2 overflow-hidden">
            <Avatar className="rounded-lg size-8">
                <AvatarImage src={user.imageUrl} alt={user.name} />
                <AvatarFallback className="uppercase bg-primary text-primaty-foreground">
                    {nameInitials}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1 min-w-0 leading-tight group-data[state=collapsed]:hidden">
                <span className="truncate text-sm font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
            </div>
        </div>
    )
}

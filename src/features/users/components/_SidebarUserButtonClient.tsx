"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SidebarMenu, SidebarMenuButton } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"
import { ChevronsUpDown } from "lucide-react"

type User = {
    name: string, 
    imageUrl: string
    email: string
}

export function SidebarUserButtonClient({ user }: { user: User}) {
    const { isMobile } = useIsMobile()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                    <UserInfo {...user} />
                    <ChevronsUpDown className="ml-auto group-data-[state=collapsed]:hidden" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>Hi</DropdownMenuContent>
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


/* https://www.youtube.com/watch?v=xIfSwINNM40&t=4291s
1:16:37
 */
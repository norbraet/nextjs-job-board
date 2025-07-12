"use client "

import { SidebarMenu } from "@/components/ui/sidebar"
import { useIsMobile } from "@/hooks/use-mobile"

export function SidebarUserButtonClient({ 
    user 
}: { 
    user: {
        name: string, 
        imageUrl: string
        email: string
    }
}
) {
    const { isMobile } = useIsMobile()

    return <SidebarMenu>
        
    </SidebarMenu>
}

/* 
https://www.youtube.com/watch?v=xIfSwINNM40&t=4289s 
Aufgehört: 1:11:31
*/
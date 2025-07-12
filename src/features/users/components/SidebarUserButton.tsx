import { auth } from "@clerk/nextjs/server"
import { Suspense } from "react"
import { SidebarUserButtonClient } from "@/features/users/components/_SidebarUserButtonClient"

export function SidebarUserButton() {
    return (
        <Suspense>
            <SidebarUserSuspense />
        </Suspense>
    )
}

async function SidebarUserSuspense() {
    const { userId } = await auth()

    return <SidebarUserButtonClient user={{ email: "norbi@test.com", name: "Norbert Balaz", imageUrl: "" }} />
}
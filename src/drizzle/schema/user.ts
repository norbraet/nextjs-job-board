import { pgTable, varchar } from "drizzle-orm/pg-core"
import { createdAt, updatedAt } from "@/drizzle/schemaHelpers"
import { relations } from "drizzle-orm"
import { UserNotificationSettingsTable } from "@/drizzle/schema/userNotificationSettings"
import { UserResumeTable } from "@/drizzle/schema/userResume"
import { OrganizationUserSettingsTable } from "@/drizzle/schema/organizationUserSettings"

export const UserTable = pgTable(
    "users", 
    {
        id: varchar().primaryKey(),
        name: varchar().notNull(),
        imageUrl: varchar().notNull(),
        email: varchar().notNull().unique(),
        createdAt,
        updatedAt,
    }
)

export const userRelations = relations(
    UserTable,
    ({ one, many}) => ({
        notificationSettings: one(UserNotificationSettingsTable),
        resume: one(UserResumeTable),
        organizationUserSettings: many(OrganizationUserSettingsTable)
    })
)
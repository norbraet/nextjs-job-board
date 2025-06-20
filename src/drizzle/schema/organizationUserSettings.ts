import { boolean, integer, pgTable, primaryKey, varchar } from "drizzle-orm/pg-core"
import { UserTable } from "@/drizzle/schema/user"
import { OrganizationTable } from "@/drizzle/schema/organizations"
import { createdAt, updatedAt } from "@/drizzle/schemaHelpers"
import { relations } from "drizzle-orm"

export const OrganizationUserSettingsTable = pgTable(
    "organization_user_settings",
    {
        userId: varchar()
            .notNull()
            .references(() => UserTable.id),
        organizationId: varchar()
            .notNull()
            .references(() => OrganizationTable.id),
        newApplicationEmailNotifications: boolean().notNull().default(false),
        minimumRating: integer(),
        createdAt,
        updatedAt,
    },
    table => [primaryKey({ columns: [table.userId, table.organizationId] })]
)

export const organiztationUserSettingsRelations = relations(
    OrganizationUserSettingsTable,
    ({ one }) => ({
        user: one(UserTable, {
            fields: [OrganizationUserSettingsTable.userId],
            references: [UserTable.id],
        }),
        organization: one(OrganizationTable, {
            fields: [OrganizationUserSettingsTable.userId],
            references: [OrganizationTable.id]
        })
    })
)
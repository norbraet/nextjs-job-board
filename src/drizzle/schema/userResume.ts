import { pgTable, varchar } from "drizzle-orm/pg-core"
import { createdAt, updatedAt } from "@/drizzle/schemaHelpers"
import { UserTable } from "@/drizzle/schema/user"
import { relations } from "drizzle-orm"

export const UserResumeTable = pgTable(
    "user_resumes",
    {
        userId: varchar()
            .primaryKey()
            .references(() => UserTable.id),
        resumeFileUrl: varchar().notNull(),
        resumeFileKey: varchar().notNull(),
        aiSummery: varchar(),
        createdAt,
        updatedAt,
    }
)

export const userResumeRelations = relations(
    UserResumeTable, 
    ({ one }) => ({
        user: one(UserTable, {
            fields: [UserResumeTable.userId],
            references: [UserTable.id]
        })
    }) 
)
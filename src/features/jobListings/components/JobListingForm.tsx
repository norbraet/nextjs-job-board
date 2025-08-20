"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { jobListingSchema } from "@/features/jobListings/actions/schemas";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import z from "zod";
import { Input } from "@/components/ui/input";

export function JobListingForm() {
    const form = useForm({
        resolver: zodResolver(jobListingSchema),
        defaultValues: {
            title: "",
            description: "",
            stateAbbreviation: null,
            city: null,
            wage: null,
            wageInterval: "yearly",
            experienceLevel: "junior",
            locationRequirement: "in-office"
        }
    })
    function onSubmit(data: z.infer<typeof jobListingSchema>) {
        console.log('data :>> ', data)
    }

    return (
        <Form {...form}>
            <form className="space-y-6 @container" onSubmit={form.handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 @md:grid-cols-2 gap-x-4 gap-y-6 items-start">
                    <FormField 
                        name="title" 
                        control={form.control} 
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Job Title</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} 
                    />
                    <FormField 
                        name="wage" 
                        control={form.control} 
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Wage</FormLabel>
                                <FormControl>
                                    <Input 
                                        {...field} 
                                        type="number" 
                                        value={field.value ?? ""}
                                        className="rounded-r-none"
                                        onChange={e => field.onChange(isNaN(e.target.valueAsNumber) ? null : e.target.valueAsNumber)}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} 
                    />
                </div>
            </form>
        </Form>
    )
}

/*
Clerk: https://dashboard.clerk.com/apps/app_2yrqtDAQD8fBVRNZtp1ZekH4hRV/instances/ins_2yrqt9mGW1tU46kan2ZGfMKIwBW/organizations 
Inngest: https://app.inngest.com/env/development-294511ed/events
YouTube: https://www.youtube.com/watch?v=xIfSwINNM40 
    Time: 2:56:30
*/
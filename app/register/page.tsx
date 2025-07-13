"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { json, z } from "zod";
import Link from "next/link";

const formSchema = z
    .object({
        name: z.string().min(3, "Name must be at least 3 characters"),
        email: z.string().email("Invalid email"),
        password: z.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

const RegisterPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        resolver: zodResolver(formSchema),
    });



    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Register Data:", data);
        // yahan API call ya DB insert ka code likh sakte ho
        try {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "/api/register", true)
            xhr.onload = function () {
                let response = JSON.parse(xhr.response)
                if (response.message == "success") {
                    location.href = "/sign-in"
                }
                else {
                    if (response.message === "Email already exists") {
                        form.setError("email", { type: "server", message: "Email already exists" })
                        return
                    }
                }
            }
            let formdata = new FormData()
            formdata.append("name", data.name)
            formdata.append("email", data.email)
            formdata.append("password", data.password)
            formdata.append("confirmPassword", data.confirmPassword)
            xhr.send(formdata)


        }
        catch (e) {
            alert("Registration Failed")

        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-xs w-full flex flex-col items-center">
                <p className="mt-4 text-xl font-bold tracking-tight">
                    Register to RXMAT
                </p>

                <Button className="mt-8 w-full gap-3">
                    <GoogleLogo />
                    Continue with Google
                </Button>

                <div className="my-7 w-full flex items-center justify-center overflow-hidden">
                    <Separator />
                    <span className="text-sm px-2">OR</span>
                    <Separator />
                </div>

                <Form {...form}>
                    <form
                        className="w-full space-y-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Confirm Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="mt-4 w-full">
                            Create Account
                        </Button>
                    </form>
                </Form>

                <div className="mt-5 space-y-5">
                    <p className="text-sm text-center">
                        Already have an account?
                        <Link href="/sign-in" className="ml-1 underline text-muted-foreground">
                            Sign in here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

const GoogleLogo = () => (
    <svg
        width="1.2em"
        height="1.2em"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block shrink-0 align-sub text-[inherit] size-lg"
    >
        <g clipPath="url(#clip0)">
            <path
                d="M15.6823 8.18368C15.6823 7.63986 15.6382 7.0931 15.5442 6.55811H7.99829V9.63876H12.3194C12.1401 10.6323 11.564 11.5113 10.7203 12.0698V14.0687H13.2983C14.8122 12.6753 15.6823 10.6176 15.6823 8.18368Z"
                fill="#4285F4"
            ></path>
            <path
                d="M7.99812 16C10.1558 16 11.9753 15.2915 13.3011 14.0687L10.7231 12.0698C10.0058 12.5578 9.07988 12.8341 8.00106 12.8341C5.91398 12.8341 4.14436 11.426 3.50942 9.53296H0.849121V11.5936C2.2072 14.295 4.97332 16 7.99812 16Z"
                fill="#34A853"
            ></path>
            <path
                d="M3.50665 9.53295C3.17154 8.53938 3.17154 7.4635 3.50665 6.46993V4.4093H0.849292C-0.285376 6.66982 -0.285376 9.33306 0.849292 11.5936L3.50665 9.53295Z"
                fill="#FBBC04"
            ></path>
            <path
                d="M7.99812 3.16589C9.13867 3.14825 10.241 3.57743 11.067 4.36523L13.3511 2.0812C11.9048 0.723121 9.98526 -0.0235266 7.99812 -1.02057e-05C4.97332 -1.02057e-05 2.2072 1.70493 0.849121 4.40932L3.50648 6.46995C4.13848 4.57394 5.91104 3.16589 7.99812 3.16589Z"
                fill="#EA4335"
            ></path>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="15.6825" height="16" fill="white"></rect>
            </clipPath>
        </defs>
    </svg>
);

export default RegisterPage;

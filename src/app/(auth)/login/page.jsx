"use client"
import { Button, Description, FieldError, Form, Input, InputGroup, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
        console.log("User data: ", userData);

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: "/",
        });

        console.log('sign in response: ', { data, error });

        if (data) {
            toast.success("Sign-in successful!");
        }

        if (error) {
            toast.error(
                'Invalid email or password. Please try again!'
            );
        }

    };
    return (
        <>
            <ToastContainer placement="top-center" />
            <div className="w-11/12 mx-auto  min-h-[84vh] flex items-center justify-center gap-3">


                
                    <div className=" pb-3 flex flex-col items-center justify-center px-4">

                        <div className="bg-white  shadow-xl px-8 py-9 rounded-2xl ">

                            <div>
                                <div className="flex flex-col items-center gap-1 pb-4">
                                    <h1 className="text-2xl font-bold text-(--dark2)">Login your account</h1>
                                </div>
                                <div className="divider text-gray-400"></div>
                            </div>

                            <Form className="flex sm:w-96 flex-col gap-4" onSubmit={onSubmit}>
                                {/* Email field */}
                                <TextField
                                
                                    isRequired
                                    name="email"
                                    type="email"
                                    validate={(value) => {
                                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                            return "Please enter a valid email address";
                                        }
                                        return null;
                                    }}
                                >
                                    <Label className="text-(--dark2)">Email</Label>
                                    <Input name="email" placeholder="Enter Your Email" className="w-full  border border-(--dark6) ring-1 ring-(--dark7) focus:outline-blue-500 placeholder:text-md" />
                                    <FieldError />
                                </TextField>

                                {/* Password field */}
                                <TextField className="w-full " name="password"
                                    isRequired
                                    minLength={8}
                                    type="password"
                                    validate={(value) => {
                                        if (value.length < 8) {
                                            return "Password must be at least 8 characters";
                                        }
                                        if (!/[A-Z]/.test(value)) {
                                            return "Password must contain at least one uppercase letter";
                                        }
                                        if (!/[0-9]/.test(value)) {
                                            return "Password must contain at least one number";
                                        }
                                        return null;
                                    }}>
                                    <Label className="text-(--dark2)">Password</Label>
                                    <InputGroup className="border border-(--dark6) rounded-lg focus:outline-(--dark2)">
                                        <InputGroup.Input
                                            name="password"
                                            className="w-full placeholder:text-sm"
                                            placeholder="Enter your password"
                                            type={isVisible ? "text" : "password"}

                                        />
                                        <InputGroup.Suffix className="pr-0">
                                            <Button
                                                isIconOnly
                                                aria-label={isVisible ? "Hide password" : "Show password"}
                                                size="sm"
                                                variant="ghost"
                                                onPress={() => setIsVisible(!isVisible)}
                                            >
                                                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                            </Button>
                                        </InputGroup.Suffix>
                                    </InputGroup>
                                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                                    <FieldError />
                                </TextField>

                                {/* Submit and Reset buttons */}
                                <div className="flex flex-col items-center gap-2">
                                    <Button type="submit" className="w-full btn bg-(--dark2) text-white">
                                        Login
                                    </Button>
                                    <p className="text-sm text-center text-gray-400">
                                        Don&apos;t have an account?{" "}
                                        <Link href="/register" className="text-red-500 hover:text-red-400 font-medium transition-colors">
                                           Register
                                        </Link>
                                    </p>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
           
        </>
    );
};

export default LoginPage;
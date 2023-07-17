"use client";

import Button from "@/components/Button";
import Input from "@/components/inputs/Input";
import { useCallback, useEffect, useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import AuthBtn from "./AuthBtn";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { error } from "console";
import Loading from "../loading";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  //

  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.status === "authenticated") {
      console.log("authenticated");

      router.push("/users");
    }
  }, [session?.status, router]);

  const socialAction = (action: string) => {
    //
    signIn(action, { redirect: false }).then((callback) => {
      if (callback?.error) {
        toast.error("Invalid credentials...");
      }

      if (callback?.ok && !callback.error) {
        toast.success("Successfully logged in...");
        router.push("/users");
      }
    });

    //
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <div className="mt-6 flex flex-col gap-6">
          <AuthBtn icon={BsGithub} onClick={() => socialAction("github")} />
          <AuthBtn icon={BsGoogle} onClick={() => socialAction("google")} />
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

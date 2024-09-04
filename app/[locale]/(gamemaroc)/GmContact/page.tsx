"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Button, Label, Spinner, Textarea, TextInput } from "flowbite-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const t = useTranslations("contact");
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  // send email function
  const sendEmail = async ({ body }: any) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // make message better
        body: JSON.stringify({
          email: body.email,
          subject: body.subject,
          message: `<div style="font-family: Arial, sans-serif; font-size: 16px;"> <p style="color: red;">This email from next lite online contact page</p> <p>Email: ${body.email}</p> <p>Subject: ${body.subject}</p> <h1 style="font-size: 24px; font-weight: bold; margin-top: 16px; margin-bottom: 16px;"
          >${body.message}</h1> </div>`,
        }),
      });

      console.log(response);

      if (response.status === 200) {
        toast.success("Email sent successfully");
        router.push("/");
      } else {
        toast.error("Failed to send email");
      }
    } catch (error) {
      toast.error("An error occurred while sending the email");
    } finally {
      setLoading(false); // Ensure loading state is reset after the process
    }
  };

  // handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when starting the email sending process
    // delay 4s
    await sendEmail({
      body: {
        email: e.currentTarget.email.value,
        subject: e.currentTarget.subject.value,
        message: e.currentTarget.message.value,
      },
    });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          {t("title")}
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          {t("description")}
        </p>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <Label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {t("emailLabel")}
            </Label>
            <TextInput
              type="email"
              id="email"
              name="email"
              placeholder={t("emailPlaceholder")}
              required
            />
          </div>
          <div>
            <Label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              {t("subjectLabel")}
            </Label>
            <TextInput
              type="text"
              id="subject"
              name="subject"
              placeholder={t("subjectPlaceholder")}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <Label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              {t("messageLabel")}
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t("messagePlaceholder")}
            ></Textarea>
          </div>
          <Button disabled={loading} color="yellow" type="submit">
            {loading ? (
              <div className="flex items-center justify-center">
                <Spinner className="mr-2" />
                Loading...
              </div>
            ) : (
              t("submitButton")
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

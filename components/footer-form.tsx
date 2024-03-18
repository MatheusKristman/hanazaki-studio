"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Element } from "react-scroll";
import { toast } from "react-hot-toast";

import { footerFormSchema } from "@/constants/schemas/footer-form-schema";
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
import { useState } from "react";

export function FooterForm() {
  const [isSending, setIsSending] = useState<boolean>(false);

  const form = useForm<z.infer<typeof footerFormSchema>>({
    resolver: zodResolver(footerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof footerFormSchema>) {
    setIsSending(true);

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Mensagem enviada com sucesso!");
      }, 2000);
    });

    promise
      .then((res) => {
        toast.success(res as string);
        form.reset();
      })
      .finally(() => setIsSending(false));
  }

  return (
    <Form {...form}>
      <Element name="contact" className="mb-4 flex-grow max-w-md">
        <form id="contact" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="poppins-font text-base font-medium text-light-primary">
                  Nome
                </FormLabel>

                <FormControl>
                  <Input disabled={isSending} {...field} />
                </FormControl>

                <FormMessage className="poppins-font text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mb-4">
                <FormLabel className="poppins-font text-base font-medium text-light-primary">
                  E-mail
                </FormLabel>

                <FormControl>
                  <Input disabled={isSending} {...field} />
                </FormControl>

                <FormMessage className="poppins-font text-sm" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel className="poppins-font text-base font-medium text-light-primary">
                  Mensagem
                </FormLabel>

                <FormControl>
                  <Input disabled={isSending} {...field} />
                </FormControl>

                <FormMessage className="poppins-font text-sm" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSending}
            className="block mx-auto poppins-font text-base font-bold"
          >
            {isSending ? <>Enviando</> : <>Enviar</>}
          </Button>
        </form>
      </Element>
    </Form>
  );
}

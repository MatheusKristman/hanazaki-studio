"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

export function FooterForm() {
  const form = useForm<z.infer<typeof footerFormSchema>>({
    resolver: zodResolver(footerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof footerFormSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-4 flex-grow max-w-md"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mb-4">
              <FormLabel className="poppins-font text-base font-medium text-light-primary">
                Nome
              </FormLabel>

              <FormControl>
                <Input {...field} />
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
                <Input {...field} />
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
                <Input {...field} />
              </FormControl>

              <FormMessage className="poppins-font text-sm" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="block mx-auto poppins-font text-base font-bold"
        >
          Enviar
        </Button>
      </form>
    </Form>
  );
}

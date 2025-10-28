// components/DonationForm/index.tsx
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import axios from "axios";

const donationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  amount: z.number().min(1, "Amount must be at least 1"),
});

type DonationFormValues = z.infer<typeof donationSchema>;

export default function DonationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<DonationFormValues>({
    resolver: zodResolver(donationSchema),
    defaultValues: { name: "", email: "", amount: 20 },
  });

  async function onSubmit(data: DonationFormValues) {
    try {
      // TODO: replace endpoint with your payment / donation API
      await axios.post("/api/donate", data);
      reset();
      // show a toast in real app
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-slate-50 p-4 rounded-md"
    >
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            {...register("name")}
            className="mt-1 block w-full rounded border px-3 py-2"
          />
          {errors.name && (
            <p className="text-xs text-rose-600 mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            {...register("email")}
            type="email"
            className="mt-1 block w-full rounded border px-3 py-2"
          />
          {errors.email && (
            <p className="text-xs text-rose-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Amount (USD)</label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            min={1}
            className="mt-1 block w-full rounded border px-3 py-2"
          />
          {errors.amount && (
            <p className="text-xs text-rose-600 mt-1">
              {errors.amount.message}
            </p>
          )}
        </div>

        <div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting
              ? "Processing…"
              : isSubmitSuccessful
                ? "Thanks!"
                : "Donate"}
          </Button>
        </div>
      </div>
    </form>
  );
}

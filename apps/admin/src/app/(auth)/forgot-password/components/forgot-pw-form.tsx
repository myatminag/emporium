'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from 'packages/ui/src';

const forgotPwSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type ForgotPwSchemaType = z.infer<typeof forgotPwSchema>;

const ForgotPasswordForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ForgotPwSchemaType>({
    resolver: zodResolver(forgotPwSchema),
  });

  const handleForgotPassword = (data: ForgotPwSchemaType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleForgotPassword)}
      className="w-full space-y-6"
    >
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="inline-block text-base font-medium text-neutral-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>
      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="w-full rounded-sm text-base"
      >
        Recover Password
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;

'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button, TogglePasswordIcon } from '@ecommerce/ui';

const resetPasswordSchema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    cpassword: z.string().min(8, 'Password must be at least 8 characters'),
  })
  .refine((data) => data.password === data.cpassword, {
    message: 'Passwords do not match.',
    path: ['cpassword'],
  });

type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;

const PasswordForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const handleResetPassword = (data: ResetPasswordSchemaType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleResetPassword)}
      className="w-full space-y-6"
    >
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="inline-block text-base font-medium text-neutral-700"
        >
          New Password
        </label>
        <div className="relative">
          <input
            id="password"
            type="password"
            {...register('password')}
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base disabled:pointer-events-none disabled:opacity-50"
            placeholder="Enter your new password"
          />
          <button
            type="button"
            data-hs-toggle-password='{"target": "#password"}'
            className="absolute end-0 top-0 p-3.5 focus:outline-none disabled:pointer-events-none"
          >
            <TogglePasswordIcon className="size-4 flex-shrink-0 text-neutral-400" />
          </button>
          {errors.password && (
            <span className="text-sm text-red-500">
              {errors.password?.message}
            </span>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <label
          htmlFor="cpassword"
          className="inline-block text-base font-medium text-neutral-700"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="cpassword"
            type="password"
            {...register('cpassword')}
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base disabled:pointer-events-none disabled:opacity-50"
            placeholder="Enter your confirm password"
          />
          <button
            type="button"
            data-hs-toggle-password='{"target": "#cpassword"}'
            className="absolute end-0 top-0 p-3.5 focus:outline-none disabled:pointer-events-none"
          >
            <TogglePasswordIcon className="size-4 flex-shrink-0 text-neutral-400" />
          </button>
          {errors.cpassword && (
            <span className="text-sm text-red-500">
              {errors.cpassword?.message}
            </span>
          )}
        </div>
      </div>
      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="w-full text-base"
      >
        Reset Password
      </Button>
    </form>
  );
};

export default PasswordForm;

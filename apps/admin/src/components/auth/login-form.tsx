'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  InfoIcon,
  Button,
  PhoneIcon,
  TogglePasswordIcon,
} from 'packages/ui/src';

const loginSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }),
  password: z.string().min(8, { message: 'Password is required' }),
});

type loginSchemaType = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const router = useRouter();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const handleSignIn: SubmitHandler<loginSchemaType> = async (
    data: loginSchemaType,
  ) => {
    try {
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: '/dashboard',
        redirect: false,
      });

      if (res?.error) {
        console.log(res.error);
      } else {
        router.replace('/dashboard');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleSignIn)} className="w-full space-y-6">
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
          <span className="text-sm text-red-500">{errors.email?.message}</span>
        )}
      </div>
      <div className="space-y-2">
        <div className="item flex justify-between">
          <label
            htmlFor="password"
            className="inline-block text-base font-medium text-neutral-700"
          >
            Password
          </label>
          <Link
            href="/forgot-password"
            className="text-primary text-base font-medium decoration-2 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
        <div className="relative">
          <input
            id="password"
            type="password"
            {...register('password')}
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base disabled:pointer-events-none disabled:opacity-50"
            placeholder="Enter your password"
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
      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="w-full rounded-sm text-base"
      >
        Sign In
      </Button>
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="flex justify-start gap-x-4">
          <div className=" flex items-center gap-x-2">
            <InfoIcon className="text-primary size-5" />
            <span className="text-base">Help Center</span>
          </div>
          <Link href="tel:+959797961628" className=" flex items-center gap-x-2">
            <PhoneIcon className="text-primary size-5" />
            <span className="text-base">Contact Us : +95 9 797961628 </span>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;

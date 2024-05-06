'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition, useState } from 'react';
import { signIn } from 'next-auth/react';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  InfoIcon,
  Button,
  PhoneIcon,
  VisibleIcon,
  InvisibleIcon,
} from 'packages/ui/src';

const signInSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Invalid Email!' }),
  password: z
    .string()
    .min(1, { message: 'Password is required!' })
    .min(4, { message: 'Password must be at least 4 characters!' }),
});

type SignInSchemaType = z.infer<typeof signInSchema>;

const SignInForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

  const [isVisible, setIsVisible] = useState(false);
  const [isPending, startTransition] = useTransition();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  const handleSignIn: SubmitHandler<SignInSchemaType> = async (data) => {
    startTransition(async () => {
      try {
        const res = await signIn('credentials', {
          email: data.email,
          password: data.password,
          callbackUrl,
          redirect: false,
        });

        if (res?.error) {
          toast.error(res.error);
        } else {
          router.replace('/dashboard');
        }
      } catch (err) {
        toast.error('Internal server error!');
      }
    });
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
          disabled={isPending}
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
            type={isVisible ? 'text' : 'password'}
            {...register('password')}
            disabled={isPending}
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base disabled:pointer-events-none disabled:opacity-50"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute end-0 top-0 p-3.5 focus:outline-none disabled:pointer-events-none"
          >
            {isVisible ? (
              <VisibleIcon className="size-4 flex-shrink-0 text-neutral-400" />
            ) : (
              <InvisibleIcon className="size-4 flex-shrink-0 text-neutral-400" />
            )}
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
        disabled={isPending}
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

export default SignInForm;

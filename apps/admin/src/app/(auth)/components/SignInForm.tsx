'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { signIn } from 'next-auth/react';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  InfoIcon,
  Button,
  PhoneIcon,
  Input,
  PasswordInput,
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
      <Input
        label="Email"
        htmlFor="email"
        id="email"
        type="email"
        isPending={isPending}
        errors={errors.email?.message}
        placeholder="Enter your email"
        register={register}
      />
      <PasswordInput
        label="Password"
        htmlFor="password"
        id="password"
        type="password"
        isPending={isPending}
        errors={errors.password?.message}
        placeholder="Enter your password"
        register={register}
      />
      <Button
        type="submit"
        variant="primary"
        size="sm"
        disabled={isPending}
        className="w-full rounded-sm text-base"
      >
        Sign In
      </Button>
      <div className="mt-4 flex flex-col items-center justify-center gap-4">
        <Link
          href="/forgot-password"
          className="text-primary text-base font-medium decoration-2 hover:underline"
        >
          Forgot Password?
        </Link>
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

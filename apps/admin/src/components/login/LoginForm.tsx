'use client';

import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { InfoIcon, Button, PhoneIcon } from 'packages/ui/src';

const loginValidationSchema = z.object({
  email: z.string().min(1, { message: 'Email number is required' }),
  password: z.string().min(8, { message: 'Password is required' }),
});

const MyComponent = () => {
  const form = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { errors } = form.formState;

  const handleLogin = (data: z.infer<typeof loginValidationSchema>) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-6">
      <div className="relative flex flex-col gap-2">
        <label
          htmlFor="email"
          className="inline-block text-base font-medium text-neutral-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...form.register('email')}
          className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
          placeholder="Enter your email"
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email?.message}</span>
        )}
      </div>
      <div className="relative flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="inline-block text-base font-medium text-neutral-700"
          >
            Password
          </label>
          <p className="text-primary text-base font-medium">Forgot Password?</p>
        </div>
        <input
          id="password"
          type="password"
          {...form.register('password')}
          className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
          placeholder="Enter your password"
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password?.message}
          </span>
        )}
      </div>
      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="w-full text-base"
      >
        Sign In
      </Button>
      <div className="mt-4 flex items-center justify-center gap-4">
        <div className="flex justify-start gap-2">
          <div className=" flex items-center gap-1">
            <InfoIcon className="text-primary h-4 w-4" />
            <span className="text-sm">Help Center</span>
          </div>
          <div className=" flex items-center gap-1">
            <PhoneIcon className="h-4 w-4 fill-blue-500" />
            <span className="text-sm">Contact Us : +95 9 797961628 </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MyComponent;

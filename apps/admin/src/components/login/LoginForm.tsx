'use client';
import { InfoIcon, PhoneIcon, Button } from 'packages/ui/src';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginValidationSchema = z.object({
  phoneNumber: z.string().min(1, { message: 'Phone number is required' }),
  password: z.string().min(8, { message: 'Password is required' }),
});
const MyComponent = () => {
  const form = useForm<z.infer<typeof loginValidationSchema>>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });
  const { errors } = form.formState;
  const handleLogin = (data: z.infer<typeof loginValidationSchema>) => {
    console.log(data);
  };
  return (
    <form onSubmit={form.handleSubmit(handleLogin)}>
      <div className="relative flex flex-col gap-2">
        <label className="text-md font-medium">Phone Number</label>
        <input
          {...form.register('phoneNumber')}
          className="rounded-md bg-white p-2 focus:outline-none"
          placeholder="Enter your phone number"
        />
        {errors.phoneNumber && (
          <span className="text-sm text-red-500">
            {errors.phoneNumber?.message}
          </span>
        )}
      </div>
      <div className="relative mt-4 flex flex-col gap-2">
        <label className="text-md font-medium">Password</label>
        <input
          {...form.register('password')}
          className="rounded-md bg-white p-2 focus:outline-none"
          placeholder="Enter your phone number"
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password?.message}
          </span>
        )}
      </div>
      <Button type="submit" variant="primary" size="sm" className="mt-8 w-full">
        Sign In
      </Button>
      <div className="mt-4 flex items-center justify-center gap-4">
        <p className="">Forgot Password?</p>
        <div className="flex justify-start gap-2">
          <div className=" flex items-center gap-1">
            <InfoIcon className="h-4 w-4 text-blue-500" />
            <span className="text-sm">Help Center</span>
          </div>
          <div className=" flex items-center gap-1">
            <PhoneIcon className="h-4 w-4 text-blue-500" />
            <span className="text-sm">Contact Us : +95 9 797961628 </span>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MyComponent;

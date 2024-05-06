import { usePathname } from 'next/navigation';
import { useState } from 'react';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useResetPw } from '@app/services/auth/useResetPassword';

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: 'Password is required!' })
      .min(4, { message: 'Password must be at least 4 characters!' }),
    cpassword: z
      .string()
      .min(1, { message: 'Password is required!' })
      .min(4, { message: 'Password must be at least 4 characters!' }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: 'Passwords do not match!',
    path: ['cpassword'],
  });

type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;

export const useResetPassword = () => {
  const pathname = usePathname();

  const sessionId = pathname.split('/')[2];

  const [isVisible, setIsVisible] = useState({
    password: false,
    cpassword: false,
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { isPending, mutate } = useResetPw({ sessionId });

  const handleResetPassword: SubmitHandler<ResetPasswordSchemaType> = (
    data,
  ) => {
    return mutate(
      { password: data.password },
      {
        onSuccess: () => {
          toast.success('Reset password.');
        },
        onError: (err: any) => {
          toast.error(err.response.data.message);
        },
      },
    );
  };

  return {
    isVisible,
    errors,
    isPending,
    setIsVisible,
    handleSubmit,
    register,
    handleResetPassword,
  };
};

import { usePathname, useRouter } from 'next/navigation';
import * as z from 'zod';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useResetPw } from '@app/services/auth/useResetPassword';

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(1, { message: 'New Password is required!' })
      .min(4, { message: 'New Password must be at least 4 characters!' }),
    cpassword: z
      .string()
      .min(1, { message: 'Confirm Password is required!' })
      .min(4, { message: 'Confirm Password must be at least 4 characters!' }),
  })
  .refine((data) => data.password === data.cpassword, {
    message: 'Passwords do not match!',
    path: ['cpassword'],
  });

type ResetPasswordSchemaType = z.infer<typeof resetPasswordSchema>;

export const useResetPassword = () => {
  const router = useRouter();
  const pathname = usePathname();

  const sessionId = pathname.split('/')[2];

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
          router.push('/');
        },
        onError: (err: any) => {
          toast.error(err.response.data.message);
        },
      },
    );
  };

  return {
    errors,
    isPending,
    handleSubmit,
    register,
    handleResetPassword,
  };
};

import * as z from 'zod';
import { toast } from 'react-toastify';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useReqResetPw } from '@app/services/auth/useReqResetPw';

const forgotPwSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Invalid Email!' }),
});

type ForgotPwSchemaType = z.infer<typeof forgotPwSchema>;

export const useForgotPassword = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<ForgotPwSchemaType>({
    resolver: zodResolver(forgotPwSchema),
  });

  const { isPending, mutate } = useReqResetPw();

  const handleForgotPassword: SubmitHandler<ForgotPwSchemaType> = (data) => {
    return mutate(
      { email: data.email },
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
    isPending,
    errors,
    handleSubmit,
    register,
    handleForgotPassword,
  };
};

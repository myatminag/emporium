'use client';

import { Button, PasswordInput } from 'packages/ui/src';
import { useResetPassword } from '../useResetPassword';

const ResetPasswordForm = () => {
  const { errors, isPending, handleSubmit, register, handleResetPassword } =
    useResetPassword();

  return (
    <form
      onSubmit={handleSubmit(handleResetPassword)}
      className="w-full space-y-6"
    >
      <PasswordInput
        label="New Password"
        htmlFor="password"
        id="password"
        type="password"
        isPending={isPending}
        errors={errors.password?.message}
        placeholder="Enter your new password"
        register={register}
      />
      <PasswordInput
        label="Confirm Password"
        htmlFor="cpassword"
        id="cpassword"
        type="password"
        isPending={isPending}
        errors={errors.cpassword?.message}
        placeholder="Enter your confirm password"
        register={register}
      />
      <Button
        type="submit"
        variant="primary"
        size="sm"
        disabled={isPending}
        className="w-full text-base"
      >
        Reset Password
      </Button>
    </form>
  );
};

export default ResetPasswordForm;

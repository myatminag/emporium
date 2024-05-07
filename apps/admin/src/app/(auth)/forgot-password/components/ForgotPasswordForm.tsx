'use client';

import { Button } from 'packages/ui/src';
import { useForgotPassword } from '../useForgotPassword';

import { Input } from 'packages/ui/src';

const ForgotPasswordForm = () => {
  const { isPending, errors, handleSubmit, register, handleForgotPassword } =
    useForgotPassword();

  return (
    <form
      onSubmit={handleSubmit(handleForgotPassword)}
      className="w-full space-y-6"
    >
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
      <Button
        type="submit"
        variant="primary"
        size="sm"
        disabled={isPending}
        className="w-full rounded-sm text-base"
      >
        Recover Password
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;

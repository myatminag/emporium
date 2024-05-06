'use client';

import { Button, VisibleIcon, InvisibleIcon } from 'packages/ui/src';
import { useResetPassword } from '../useResetPassword';

const ResetPasswordForm = () => {
  const {
    isVisible,
    errors,
    isPending,
    setIsVisible,
    handleSubmit,
    register,
    handleResetPassword,
  } = useResetPassword();

  return (
    <form
      onSubmit={handleSubmit(handleResetPassword)}
      className="w-full space-y-6"
    >
      <div className="space-y-2">
        <label
          htmlFor="password"
          className="inline-block text-base font-medium text-neutral-700"
        >
          New Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={isVisible.password ? 'text' : 'password'}
            {...register('password')}
            disabled={isPending}
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base disabled:pointer-events-none disabled:opacity-50"
            placeholder="Enter your new password"
          />
          <button
            type="button"
            onClick={() =>
              setIsVisible((prev) => ({ ...prev, password: !prev.password }))
            }
            className="absolute end-0 top-0 p-3.5 focus:outline-none disabled:pointer-events-none"
          >
            {isVisible.password ? (
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
      <div className="space-y-2">
        <label
          htmlFor="cpassword"
          className="inline-block text-base font-medium text-neutral-700"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="cpassword"
            type={isVisible.cpassword ? 'text' : 'password'}
            {...register('cpassword')}
            disabled={isPending}
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base disabled:pointer-events-none disabled:opacity-50"
            placeholder="Enter your confirm password"
          />
          <button
            type="button"
            onClick={() =>
              setIsVisible((prev) => ({ ...prev, cpassword: !prev.cpassword }))
            }
            className="absolute end-0 top-0 p-3.5 focus:outline-none disabled:pointer-events-none"
          >
            {isVisible.cpassword ? (
              <VisibleIcon className="size-4 flex-shrink-0 text-neutral-400" />
            ) : (
              <InvisibleIcon className="size-4 flex-shrink-0 text-neutral-400" />
            )}
          </button>
          {errors.cpassword && (
            <span className="text-sm text-red-500">
              {errors.cpassword?.message}
            </span>
          )}
        </div>
      </div>
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

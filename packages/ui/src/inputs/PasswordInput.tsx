import { HTMLInputTypeAttribute, useState } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

import { VisibleIcon, InvisibleIcon } from '../icons/auth-icon';

type InputProps<T extends FieldValues> = {
  label: string;
  htmlFor: string;
  id: Path<T>;
  type: HTMLInputTypeAttribute;
  isPending: boolean;
  errors: string | undefined;
  placeholder?: string;
  register: UseFormRegister<T>;
};

export const PasswordInput = <T extends FieldValues>({
  label,
  htmlFor,
  id,
  type,
  isPending,
  errors,
  placeholder,
  register,
}: InputProps<T>) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="space-y-2">
      <label
        htmlFor={htmlFor}
        className="inline-block text-base font-medium text-neutral-700"
      >
        {label}
      </label>
      <div className="relative">
        <input
          id={id}
          type={isVisible ? 'text' : type}
          {...register(id)}
          disabled={isPending}
          className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base disabled:pointer-events-none disabled:opacity-50"
          placeholder={placeholder}
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
        {errors && <span className="text-sm text-red-500">{errors}</span>}
      </div>
    </div>
  );
};

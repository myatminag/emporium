import { HTMLInputTypeAttribute } from 'react';
import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

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

export const Input = <T extends FieldValues>({
  label,
  htmlFor,
  id,
  type,
  isPending,
  errors,
  placeholder,
  register,
}: InputProps<T>) => {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={htmlFor}
        className="inline-block text-base font-medium text-neutral-700"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(id)}
        disabled={isPending}
        className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
        placeholder={placeholder}
      />
      {errors && <span className="text-sm text-red-500">{errors}</span>}
    </div>
  );
};

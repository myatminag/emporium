import { Control, Controller, UseFormRegister } from 'react-hook-form';

type InputProps = {
  label: string;
  control: Control<any>;
  errors: any;
  type: string;
  fieldName: string;
};
const TextInput = ({ label, control, errors, type, fieldName }: InputProps) => {
  return (
    <div>
      <label htmlFor={type} className="mb-2 block text-sm dark:text-white">
        {label}
      </label>
      <div className="relative">
        <Controller
          control={control}
          name={fieldName}
          render={({ field }) => (
            <input
              type={type}
              className="block w-full rounded-lg border-2 border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
              {...field}
            />
          )}
        />
        {errors[fieldName] && (
          <span className="mt-2 hidden text-xs text-red-600">
            {errors[fieldName].message}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextInput;

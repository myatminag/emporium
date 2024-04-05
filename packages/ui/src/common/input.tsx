import { Control, Controller } from 'react-hook-form';

type InputProps = {
  label: string;
  control: Control<any>;
  errors: any;
  type: string;
  fieldName: string;
};
export const TextInput = ({
  label,
  control,
  errors,
  type,
  fieldName,
}: InputProps) => {
  return (
    <div>
      <div className="relative">
        <Controller
          control={control}
          name={fieldName}
          render={({ field }) => (
            <div className="relative">
              <input
                type={type}
                id={fieldName}
                className="text-md peer block w-full appearance-none rounded-lg border border-[#E6E6E6] bg-transparent px-2.5 pb-1.5 pt-3 text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
                placeholder=" "
                {...field}
              />
              <label
                htmlFor={fieldName}
                className="text-md absolute start-1 top-1 z-10 origin-[0] -translate-y-3 scale-75 transform bg-white px-2 text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-1 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
              >
                {label}
              </label>
            </div>
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

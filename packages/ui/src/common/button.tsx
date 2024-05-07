import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { LoaderIcon } from '../icons/action-icon';
import { cn } from 'packages/lib/src';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900',
  {
    variants: {
      variant: {
        default: 'bg-secondary-100 text-black hover:bg-secondary-200',
        primary: 'bg-primary text-white hover:bg-primary/80',
        link: 'bg-transparent text-blue-500 hover:text-blue-300',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        xs: 'h-8 px-1.5 rounded-sm',
        lg: 'h-11 px-8 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? (
          <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : null}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };

import { Button } from '@nextui-org/react';

const Subscribe = () => {
  return (
    <div className="flex h-52 flex-col items-center justify-center gap-y-3 bg-neutral-100">
      <p className="text-lg font-medium">Subscribe to our new letter</p>
      <p className="text-base text-neutral-700">
        Get daily news on upcoming offers us
      </p>
      <form className="w-full px-4 lg:mx-0 lg:w-[400px]">
        <div className="flex max-w-md gap-x-3">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="block w-full rounded border px-3 py-2 text-base text-gray-700 shadow-sm focus:outline-none"
          />
          <Button color="primary" className="w-36 rounded">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;

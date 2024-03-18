import React from 'react';

const TextAreaInput = () => {
  return (
    <div className="relative">
      <textarea
        id="message"
        rows={4}
        className="text-md block w-full rounded-lg border border-gray-300 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default TextAreaInput;

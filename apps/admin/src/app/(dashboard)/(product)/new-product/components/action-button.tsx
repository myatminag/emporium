'use client';

const ActionButton = () => {
  return (
    <div className="mt-5 flex justify-end gap-x-2">
      <button
        type="button"
        className="shadow-base inline-flex items-center gap-x-2 rounded-sm border border-gray-200 bg-white px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
      >
        Cancel
      </button>
      <button
        type="button"
        className="bg-primary inline-flex items-center gap-x-2 rounded-sm border border-transparent px-4 py-2 text-base font-medium text-white disabled:pointer-events-none disabled:opacity-50"
      >
        Save
      </button>
    </div>
  );
};

export default ActionButton;

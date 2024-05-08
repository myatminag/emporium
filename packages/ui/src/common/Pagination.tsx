import ReactPaginate from 'react-paginate';

import { ChevronIcon } from '../icons/arrows-icon';

export const Pagination = () => {
  return (
    <div className="mt-4 flex items-center justify-between">
      <ReactPaginate
        previousLabel={<ChevronIcon direction="left" className="h-5 w-5" />}
        nextLabel={<ChevronIcon direction="right" className="h-5 w-5" />}
        breakLabel="..."
        breakClassName="dark:text-gray-200"
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        // pageCount={Math.ceil(totalCount / limit)}
        pageCount={1}
        // forcePage={page - 1}
        // renderOnZeroPageCount={() => {}}
        // onPageChange={pageChangeHandler}
        containerClassName="flex items-center gap-x-4"
        previousClassName="border rounded"
        previousLinkClassName="px-1.5 py-1 block"
        nextClassName="border rounded"
        nextLinkClassName="px-1.5 py-1 block"
        pageClassName="rounded bg-neutral-[#FF3951] text-base"
        pageLinkClassName="p-3 py-1 block border rounded"
        activeClassName="bg-[#FF3951] text-white"
      />

      {/* {show && (
        <div className="hidden items-center  gap-x-5 md:flex">
          <p className="text-base  text-neutral-700">
            {`${getPageSizeFrom()}-${getPageSizeTo()} of ${totalCount} results`}
          </p>
          <select
            value={limit}
            onChange={(e) => {
              updateQuery({ limit: e.target.value });
            }}
            className="cursor-pointer rounded-lg border-2 bg-white px-4 py-1 text-base focus:outline-none"
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      )} */}
    </div>
  );
};

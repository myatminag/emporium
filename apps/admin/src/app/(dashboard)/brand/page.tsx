import BrandSortOptions from './components/brand-sort-options';
import BrandSearch from './components/brand-search';
import BrandPopularOptions from './components/brand-popular-options';
import BrandPagination from './components/brand-pagination';
import CreateBrand from './components/create-brand';
import BrandTableLists from './components/brand-table-lists';

const Brand = () => {
  return (
    <div className="bg-secondary-400 flex w-full px-4 pt-4">
      <div className="h-full w-full rounded-tl-lg rounded-tr-lg bg-white px-4 pt-8">
        <h1 className="text-xl font-semibold">Brands</h1>
        <div className="my-4 flex flex-col items-start  gap-1 pr-4 md:flex-row md:justify-between">
          <div className="flex items-center justify-center gap-2 md:gap-6">
            <CreateBrand />
            <BrandPopularOptions />
          </div>
          <div className=" xs:mt-4 w-full md:w-64">
            <BrandSearch />
          </div>
        </div>
        <div className="text-md my-2 flex items-center justify-between px-2">
          <h3 className="">Total of 5 brands</h3>
          <BrandSortOptions />
        </div>

        {/*  brand lists*/}
        <BrandTableLists />

        {/*  page lists*/}
        <div className="fixed bottom-0 mt-auto w-full bg-white py-4">
          <BrandPagination />
        </div>
      </div>
    </div>
  );
};

export default Brand;

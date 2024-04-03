import Image from 'next/image';
import { brands } from '../../../../data/dummy';
import BrandDescription from './brand-description';
import { EditIcon, PopularIcon, TrashIcon } from '@ecommerce/ui';
import { cn } from '@ecommerce/lib';
import BrandAction from './brand-action';

const BrandTableLists = () => {
  return (
    <div className="relative">
      <table className=" w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
        <thead className="text-md bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-3 py-3 md:px-6">
              Name
            </th>
            <th scope="col" className="px-3 py-3 md:px-6">
              Description
            </th>
            <th scope="col" className="px-3 py-3 md:px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="min-h-screen pb-12">
          {brands.map((item, index) => (
            <tr
              key={index}
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <th
                scope="row"
                className="whitespace-nowrap p-2 font-medium text-gray-900 md:px-6 md:py-4 dark:text-white"
              >
                <div className="inline-flex items-center gap-2">
                  <PopularIcon
                    className={cn(
                      'h-5 w-5',
                      item.popular ? 'text-secondary-500' : 'text-gray-400',
                    )}
                  />
                  <Image
                    src={item.url}
                    alt="brand-icon"
                    width={40}
                    height={40}
                  />
                </div>
              </th>
              <td className="max-w-sm px-2 py-4 md:max-w-md md:px-6">
                <BrandDescription description={item.description} />
              </td>
              <td className="inline-flex items-center gap-2 px-2 py-4 md:px-6">
                <BrandAction />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BrandTableLists;

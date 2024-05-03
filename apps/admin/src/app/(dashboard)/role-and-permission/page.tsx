import RoleList from './components/role-list';
import AddStaff from './components/add-staff';
import { ChevronIcon } from 'packages/ui/src';

const RoleAndPermission = () => {
  return (
    <main className="space-y-5 p-4 lg:p-6">
      <div className="flex items-center justify-between">
        <ol className="flex items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <p className="flex items-center text-base text-gray-500 focus:outline-none dark:focus:text-blue-500">
              Dashboard
            </p>
            <ChevronIcon
              direction="right"
              className="mx-2 size-5 flex-shrink-0 overflow-visible text-gray-500 dark:text-neutral-600"
            />
          </li>
          <li
            className="inline-flex items-center truncate text-base font-medium text-neutral-700 dark:text-gray-200"
            aria-current="page"
          >
            Role And Permission
          </li>
        </ol>
        <AddStaff />
      </div>
      <RoleList />
    </main>
  );
};

export default RoleAndPermission;

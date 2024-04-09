import Image from 'next/image';
import OverlayCamera from '../../../../../components/overlay-camer';
import { CameraPlus, CustomDialog, TextInput } from '@ecommerce/ui';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../../store/hook';
import {
  DialogEvent,
  setDialogEvent,
  useDialogState,
} from '../../../../../store/features/general/dialog-state.slice';

const SubCategoryForm = () => {
  let subCategoryImage;
  const dummyCateLogo = '/dummy/apple.png';
  const form = useForm();
  const { dialog } = useDialogState();
  const dispatch = useAppDispatch();
  return (
    <CustomDialog
      open={dialog === DialogEvent.subCategoryDialog}
      onClose={() => dispatch(setDialogEvent(DialogEvent.initial))}
      dialogTitle={'Add New Sub Category'}
    >
      <div className="min-w-md flex gap-4 p-2 lg:w-[550px]">
        {subCategoryImage ? (
          <div className="relative h-32 w-32">
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white">
              <Image src={dummyCateLogo} alt={'sub-category-logo'} fill />
            </div>
            <div className="absolute bottom-0 right-2 z-50 h-10 w-10">
              <OverlayCamera />
            </div>
          </div>
        ) : (
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-200">
            <CameraPlus className="h-12 w-12 fill-blue-500" />
          </div>
        )}
        <div className="flex flex-1 flex-col bg-blue-500">
          <TextInput
            label={'Enter Sub Category Name'}
            control={form.control}
            errors={form.formState.errors}
            type={'text'}
            fieldName={'categoryTitle'}
          />
        </div>
      </div>
    </CustomDialog>
  );
};

export default SubCategoryForm;

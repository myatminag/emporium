import ActionButton from './components/action-button';
import ManageVariants from './components/manage-variants';
import Pricing from './components/pricing';
import ProductImage from './components/product-image';
import ProductInfo from './components/product-info';
import ProductOptions from './components/product-options';

const NewProductPage = () => {
  return (
    <div className="space-y-4 px-4 py-8 lg:px-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <ProductImage />

          <ProductInfo />

          <ManageVariants />
        </div>

        <div className="space-y-4 lg:col-span-1">
          <Pricing />

          <ProductOptions />
        </div>
      </div>

      <hr />

      <ActionButton />
    </div>
  );
};

export default NewProductPage;

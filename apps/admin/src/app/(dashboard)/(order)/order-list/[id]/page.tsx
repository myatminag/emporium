import ProductList from './components/product-list';
import CustomerInfo from './components/customer-info';
import DeliverySerivce from './components/delivery-service';
import PaymentSummary from './components/payment-summary';
import PaymentRecord from './components/payment-record';
import ActionButton from './components/action-button';

const OrderDetailPage = () => {
  return (
    <main className="space-y-4 px-4 py-8 lg:px-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="col-span-1 space-y-4 lg:col-span-2">
          <ProductList />
          <PaymentRecord />
          <PaymentSummary />
          <ActionButton />
        </div>
        <div className="col-span-1">
          <div className="space-y-4 lg:sticky lg:top-28">
            <CustomerInfo />
            <DeliverySerivce />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetailPage;

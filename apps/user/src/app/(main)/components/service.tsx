import {
  DeliveryIcon,
  RefundIcon,
  PaymentIcon,
  SupportIcon,
} from '@ecommerce/ui';

const Service = () => {
  return (
    <section className="flex justify-evenly rounded-sm border p-3">
      <div className="flex items-center gap-x-3">
        <DeliveryIcon className="w-7" />
        <div className="flex flex-col">
          <p className="text-base font-medium uppercase">Fasted Delivery</p>
          <p className="text-sm text-[#606060]">Delivery in 24/H</p>
        </div>
      </div>
      <div className="h-auto min-h-[1em] w-px self-stretch bg-neutral-200" />
      <div className="flex items-center gap-x-3">
        <RefundIcon className="w-7" />
        <div className="flex flex-col">
          <p className="text-base font-medium uppercase">24 Hours Return</p>
          <p className="text-sm text-[#606060]">100% money-back guarantee</p>
        </div>
      </div>
      <div className="h-auto min-h-[1em] w-px self-stretch bg-neutral-200" />
      <div className="flex items-center gap-x-3">
        <PaymentIcon className="w-7" />
        <div className="flex flex-col">
          <p className="text-base font-medium uppercase">Secure Payment</p>
          <p className="text-sm text-[#606060]">Your money is safe</p>
        </div>
      </div>
      <div className="h-auto min-h-[1em] w-px self-stretch bg-neutral-200" />
      <div className="flex items-center gap-x-3">
        <SupportIcon className="w-7" />
        <div className="flex flex-col">
          <p className="text-base font-medium uppercase">Support 24/7</p>
          <p className="text-sm text-[#606060]">Live contact/message</p>
        </div>
      </div>
    </section>
  );
};

export default Service;

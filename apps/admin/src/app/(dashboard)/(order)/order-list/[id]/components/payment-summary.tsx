const PaymentSummary = () => {
  return (
    <div className="w-full rounded-sm border bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium">
        Payment Summary
      </p>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-700">Est Delivery Time:</p>
          <p className="text-base font-medium text-neutral-700">(1 - 2) Days</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-700">Subtotal:</p>
          <p className="text-base font-medium text-neutral-700">345,000 Ks</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-700">Delivery Fee:</p>
          <p className="text-base font-medium text-neutral-700">3,000 Ks</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-700">Est Tax:</p>
          <p className="text-base font-medium text-neutral-700">500 Ks</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-700">Discount:</p>
          <p className="text-base font-medium text-neutral-700">-</p>
        </div>
        <hr />
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-700">Total:</p>
          <p className="text-primary text-md font-medium">380,000 Ks</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;

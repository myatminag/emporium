import Image from 'next/image';

const CustomerInfo = () => {
  return (
    <div className="w-full rounded-sm border bg-white p-4 shadow-sm">
      <div className="flex flex-col items-center gap-y-4">
        <Image
          className="inline-block size-24 rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
          alt="Image Description"
          width={150}
          height={150}
        />
        <div className="space-y-1">
          <p className="text-heading font-medium text-neutral-700">
            Adam Taylor
          </p>
          <p className="font text-base text-neutral-500">+95987654321</p>
        </div>
      </div>
      <hr className="my-6" />
      <div className="space-y-4">
        <div>
          <p className="font-medium text-neutral-700">Last Order</p>
          <p className="text-base text-neutral-500">
            7 days ago -{' '}
            <span className="text-primary font-semibold">#80294</span>
          </p>
        </div>
        <div>
          <p className="font-medium text-neutral-700">Registered</p>
          <p className="text-base text-neutral-500">2 months ago</p>
        </div>
        <div>
          <p className="font-medium text-neutral-700">Address</p>
          <p className="text-base text-neutral-500">
            45 Roker Terrace Latheronwheel KW5 8NW, London, UK
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;

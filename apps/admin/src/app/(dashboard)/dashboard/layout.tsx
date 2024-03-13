import { ReactNode } from 'react';

import Sidebar from '../../../components/sidebar';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="lg:grid lg:grid-cols-5">
      <Sidebar />
      {children}
    </main>
  );
};

export default layout;

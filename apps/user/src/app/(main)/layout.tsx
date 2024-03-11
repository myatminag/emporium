import { ReactNode } from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

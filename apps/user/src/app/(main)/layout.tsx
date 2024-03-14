import { ReactNode } from 'react';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-[#f8fafc]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;

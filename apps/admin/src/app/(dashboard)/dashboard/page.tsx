import Stats from './components/stats';
// import RevenueChart from './components/revenue-chart';
import RecentOrder from './components/recent-order';
import BestSellingProducts from './components/best-selling-products';
import TopSellingCategories from './components/top-selling-categories';
import RevenueChart from './components/revenue-chart';

const Dashboard = () => {
  return (
    <div className="space-y-4 px-4 py-8 lg:px-6">
      {/* <Stats /> */}

      {/*<RevenueChart />*/}

      <div className="grid gap-4 lg:grid-cols-3">
        {/* <TopSellingCategories /> */}

        {/* <BestSellingProducts /> */}
      </div>

      {/* <RecentOrder /> */}
    </div>
  );
};

export default Dashboard;

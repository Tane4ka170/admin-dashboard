import PageContainer from 'components/SharedComponents/PageContainer/PageContainer';
import Sidebar from 'components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import DashboardList from './DashboardList/DashboardList';
import RecentCustomersTable from './RecentCustomersTable/RecentCustomersTable';

const Dashboard = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1439);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1439);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PageContainer>
      {isLargeScreen && <Sidebar />}
      <DashboardList />
      <RecentCustomersTable />
    </PageContainer>
  );
};

export default Dashboard;

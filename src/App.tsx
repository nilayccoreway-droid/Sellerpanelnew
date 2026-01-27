import { useEffect, useState } from 'react';
import { mockProducts, mockOrders, mockSalesData } from './data/mockData';
import Header from './components/Header';
import TabNavigation, { TabType } from './components/TabNavigation';
import SalesAnalytics from './components/SalesAnalytics';
import ActivitiesPanel from './components/ActivitiesPanel';
import WidgetCards from './components/WidgetCards';
import ProductActionBar from './components/ProductActionBar';
import OrderWidget from './components/OrderWidget';
import ProductManagementPage from './components/ProductManagementPage';
import Sidebar from './components/Sidebar';
import OrdersPage from './components/OrdersPage';
import PaymentsPage from './components/PaymentsPage';

type MenuItem = 'dashboard' | 'orders' | 'products' | 'payments' | 'reports';

interface DashboardData {
  ordersCount: number;
  productsCount: number;
  transactionsCount: number;
  lifetimeSales: number;
  salesData: Array<{ date: string; amount: number }>;
  orders: Array<{
    id: string;
    order_number: string;
    order_date: string;
    customer_name: string;
    total_amount: number;
    status: string;
  }>;
  activities: Array<{
    id: string;
    title: string;
    description: string;
    type: 'alert' | 'notification' | 'update';
    is_read: boolean;
    created_at: string;
  }>;
  returnsCount: number;
  shipmentsCount: number;
  averageRating: number;
  reviewsCount: number;
}

function App() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState<MenuItem>('dashboard');
  const [activeTab, setActiveTab] = useState<TabType>('my-business');

  useEffect(() => {
    fetchDashboardData();
  }, []);

  function fetchDashboardData() {
    setLoading(true);

    setTimeout(() => {
      const orders = mockOrders;
      const ordersCount = orders.length;
      const productsCount = mockProducts.length;
      const transactionsCount = 124;
      const lifetimeSales = mockOrders.reduce((sum, order) => sum + order.amount, 0);

      const last7Days = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - (6 - i));
        return date.toISOString().split('T')[0];
      });

      const salesData = last7Days.map((date, index) => {
        const baseAmount = Math.random() * 5000000 + 3000000;
        const amount = Math.round(baseAmount * (1 + index * 0.1));
        return {
          date: new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          amount,
        };
      });

      const mockActivities = [
        {
          id: '1',
          title: 'New Order Received',
          description: 'Order #ORD-2024-001 has been placed',
          type: 'notification' as const,
          is_read: false,
          created_at: new Date().toISOString(),
        },
        {
          id: '2',
          title: 'Product Stock Alert',
          description: 'Several products are running low on stock',
          type: 'alert' as const,
          is_read: false,
          created_at: new Date(Date.now() - 3600000).toISOString(),
        },
        {
          id: '3',
          title: 'Payment Processed',
          description: 'Payment for Order #ORD-2024-002 has been confirmed',
          type: 'update' as const,
          is_read: true,
          created_at: new Date(Date.now() - 7200000).toISOString(),
        },
        {
          id: '4',
          title: 'New Review Received',
          description: 'Customer left a 5-star review on Oval Blue Sapphire Ring',
          type: 'notification' as const,
          is_read: true,
          created_at: new Date(Date.now() - 86400000).toISOString(),
        },
        {
          id: '5',
          title: 'Shipment Delivered',
          description: 'Order #ORD-2024-003 has been delivered successfully',
          type: 'update' as const,
          is_read: true,
          created_at: new Date(Date.now() - 172800000).toISOString(),
        },
      ];

      setDashboardData({
        ordersCount,
        productsCount,
        transactionsCount,
        lifetimeSales,
        salesData,
        orders: orders.map(order => ({
          id: order.id,
          order_number: order.order_id,
          order_date: order.created_at,
          customer_name: order.customer_name,
          total_amount: order.amount,
          status: order.status,
        })),
        activities: mockActivities,
        returnsCount: 3,
        shipmentsCount: 8,
        averageRating: 4.7,
        reviewsCount: 42,
      });

      setLoading(false);
    }, 800);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!dashboardData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Failed to load dashboard data</p>
      </div>
    );
  }

  const tabs = [
    { id: 'my-business' as TabType, title: 'My Business', subtitle: "Today's Global Sales", value: '¥0' },
    { id: 'products' as TabType, title: 'Products', subtitle: 'Active', value: '2/2', hasCheckmark: true },
    { id: 'orders' as TabType, title: 'Orders', subtitle: 'Open Orders', value: '--' },
    { id: 'payments' as TabType, title: 'Payments', subtitle: 'Proceeds (06/02-Today)', value: '¥0' },
    { id: 'report' as TabType, title: 'Report', subtitle: 'Monthly Report', value: '--' },
    { id: 'photoshoot' as TabType, title: 'Photoshoot', subtitle: 'Scheduled', value: '--' },
  ];

  return (
    <div className="min-h-screen bg-[#EAEDED]">
      <Header
        activeMenu={activeMenu}
        onMenuChange={setActiveMenu}
        onManageProducts={() => setActiveTab('products')}
      />

      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} tabs={tabs} />

      <main className="flex h-[calc(100vh-120px)]">
        <Sidebar />

        {activeTab === 'products' ? (
          <div className="flex-1 overflow-auto">
            <ProductManagementPage onBack={() => setActiveTab('my-business')} />
          </div>
        ) : activeTab === 'orders' ? (
          <OrdersPage />
        ) : activeTab === 'payments' ? (
          <PaymentsPage />
        ) : activeTab === 'my-business' ? (
          <div className="flex-1 overflow-auto">
            <div className="max-w-[1400px] mx-auto px-4 pt-4">
              <ProductActionBar onManageProducts={() => setActiveTab('products')} />

              <div className="mt-4">
                <SalesAnalytics salesData={dashboardData.salesData} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4 mb-4">
                <div className="lg:col-span-2">
                  <OrderWidget
                    sellerFulfilled={{
                      pending: 12,
                      unshipped: 8,
                      canceled: 2,
                      shipped: 45
                    }}
                    fulfilledByAmazon={{
                      pending: 5,
                      total: 28,
                      canceled: 1
                    }}
                  />
                </div>
                <div className="lg:col-span-1">
                  <ActivitiesPanel activities={dashboardData.activities} />
                </div>
              </div>

              <WidgetCards
                returnsCount={dashboardData.returnsCount}
                shipmentsCount={dashboardData.shipmentsCount}
                averageRating={dashboardData.averageRating}
                reviewsCount={dashboardData.reviewsCount}
              />
            </div>
          </div>
        ) : (
          <div className="flex-1 overflow-auto">
            <div className="max-w-[1400px] mx-auto px-4 pt-4">
              <div className="bg-white border border-gray-200 rounded p-8 text-center">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 capitalize">
                  {tabs.find(t => t.id === activeTab)?.title}
                </h2>
                <p className="text-gray-600">This section is under development</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;

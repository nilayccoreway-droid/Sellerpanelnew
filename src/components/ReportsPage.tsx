import { Calendar, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SalesDataPoint {
  month: string;
  value: number;
}

interface OrderReport {
  date: string;
  totalOrders: number;
  totalItems: number;
  revenue: number;
}

interface GeoData {
  country: string;
  sales: number;
  percentage: number;
}

interface TopProduct {
  name: string;
  sales: number;
  revenue: number;
}

function generateSalesData(): SalesDataPoint[] {
  const months = ['January', 'February', 'March', 'April', 'May', 'June'];
  return months.map(month => ({
    month,
    value: Math.random() * 0.8 + 0.1
  }));
}

function generateOrderReports(): OrderReport[] {
  const dates = ['2/29/24', '4/15/24', '5/30/25'];
  return dates.map(date => ({
    date,
    totalOrders: Math.floor(Math.random() * 5) + 1,
    totalItems: Math.floor(Math.random() * 5) + 1,
    revenue: Math.floor(Math.random() * 40000) + 40000
  }));
}

function generateGeoData(): GeoData[] {
  const countries = ['Japan', 'United States', 'China', 'United Kingdom', 'Germany'];
  return countries.map(country => ({
    country,
    sales: Math.floor(Math.random() * 100000) + 50000,
    percentage: Math.random() * 30 + 10
  }));
}

function generateTopProducts(): TopProduct[] {
  const products = [
    'Sterling Silver Ring - Classic Design',
    'Gold Plated Ring - Vintage Style',
    'Diamond Accent Ring - Modern',
    'Rose Gold Ring - Elegant',
    'Titanium Ring - Contemporary'
  ];
  return products.map(name => ({
    name,
    sales: Math.floor(Math.random() * 200) + 50,
    revenue: Math.floor(Math.random() * 50000) + 20000
  }));
}

export default function ReportsPage() {
  const [salesData, setSalesData] = useState<SalesDataPoint[]>([]);
  const [orderReports, setOrderReports] = useState<OrderReport[]>([]);
  const [geoData, setGeoData] = useState<GeoData[]>([]);
  const [topProducts, setTopProducts] = useState<TopProduct[]>([]);
  const [timeRange, setTimeRange] = useState<'day' | 'week' | 'month' | 'year'>('month');
  const [geoYear, setGeoYear] = useState('2024');
  const [productsYear, setProductsYear] = useState('2024');

  useEffect(() => {
    setSalesData(generateSalesData());
    setOrderReports(generateOrderReports());
    setGeoData(generateGeoData());
    setTopProducts(generateTopProducts());
  }, []);

  const formatCurrency = (amount: number) => {
    return `¥${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  const maxValue = Math.max(...salesData.map(d => d.value));
  const chartHeight = 300;
  const chartWidth = 800;
  const padding = { top: 20, right: 40, bottom: 40, left: 40 };
  const innerWidth = chartWidth - padding.left - padding.right;
  const innerHeight = chartHeight - padding.top - padding.bottom;

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Sales and Orders</h1>
          <button className="px-4 py-2 bg-teal-600 text-white text-sm rounded hover:bg-teal-700">
            Export Report
          </button>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="bg-white border border-gray-300 rounded p-4 mb-4">
          <div className="flex items-center gap-4">
            <select className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded bg-white">
              <option>Choose categories (0)</option>
              <option>Rings</option>
              <option>Necklaces</option>
              <option>Bracelets</option>
            </select>
            <select className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded bg-white">
              <option>Choose Order Status (0)</option>
              <option>Pending</option>
              <option>Shipped</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
            <button className="px-6 py-2 bg-teal-600 text-white text-sm rounded hover:bg-teal-700">
              Generate Reports
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded p-6 mb-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Sales and orders</h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTimeRange('day')}
                className={`px-3 py-1 text-sm rounded ${
                  timeRange === 'day'
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Day
              </button>
              <button
                onClick={() => setTimeRange('week')}
                className={`px-3 py-1 text-sm rounded ${
                  timeRange === 'week'
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setTimeRange('month')}
                className={`px-3 py-1 text-sm rounded ${
                  timeRange === 'month'
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setTimeRange('year')}
                className={`px-3 py-1 text-sm rounded ${
                  timeRange === 'year'
                    ? 'bg-gray-200 text-gray-900'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                Year
              </button>
            </div>
          </div>

          <div className="relative" style={{ height: chartHeight }}>
            <svg width={chartWidth} height={chartHeight} className="overflow-visible">
              <defs>
                <linearGradient id="salesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ff6b9d" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ff6b9d" stopOpacity="0.05" />
                </linearGradient>
              </defs>

              <g transform={`translate(${padding.left}, ${padding.top})`}>
                {[0, 0.2, 0.4, 0.6, 0.8, 1.0].map((tick, i) => (
                  <g key={i}>
                    <line
                      x1={0}
                      y1={innerHeight - tick * innerHeight}
                      x2={innerWidth}
                      y2={innerHeight - tick * innerHeight}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                    />
                    <text
                      x={-10}
                      y={innerHeight - tick * innerHeight}
                      textAnchor="end"
                      alignmentBaseline="middle"
                      fontSize="12"
                      fill="#6b7280"
                    >
                      {tick.toFixed(1)}
                    </text>
                  </g>
                ))}

                {salesData.map((point, i) => {
                  const x = (i / (salesData.length - 1)) * innerWidth;
                  return (
                    <text
                      key={i}
                      x={x}
                      y={innerHeight + 20}
                      textAnchor="middle"
                      fontSize="12"
                      fill="#6b7280"
                    >
                      {point.month}
                    </text>
                  );
                })}

                <path
                  d={`M ${salesData
                    .map((point, i) => {
                      const x = (i / (salesData.length - 1)) * innerWidth;
                      const y = innerHeight - (point.value / maxValue) * innerHeight;
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    })
                    .join(' ')} L ${innerWidth} ${innerHeight} L 0 ${innerHeight} Z`}
                  fill="url(#salesGradient)"
                />

                <path
                  d={salesData
                    .map((point, i) => {
                      const x = (i / (salesData.length - 1)) * innerWidth;
                      const y = innerHeight - (point.value / maxValue) * innerHeight;
                      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
                    })
                    .join(' ')}
                  fill="none"
                  stroke="#ff6b9d"
                  strokeWidth="2"
                />

                {salesData.map((point, i) => {
                  const x = (i / (salesData.length - 1)) * innerWidth;
                  const y = innerHeight - (point.value / maxValue) * innerHeight;
                  return (
                    <circle
                      key={i}
                      cx={x}
                      cy={y}
                      r="4"
                      fill="#ff6b9d"
                      stroke="white"
                      strokeWidth="2"
                    />
                  );
                })}
              </g>

              <g transform={`translate(${chartWidth - 60}, 20)`}>
                <rect x="0" y="0" width="12" height="12" fill="#ff6b9d" rx="2" />
                <text x="18" y="10" fontSize="12" fill="#6b7280">
                  Sales
                </text>
              </g>
            </svg>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded p-6 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <label className="block text-xs text-gray-700 mb-1">Start On Date</label>
              <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded bg-white">
                <input
                  type="text"
                  placeholder="MM/DD/YYYY"
                  className="text-sm outline-none w-32"
                />
                <Calendar size={16} className="text-gray-400" />
              </div>
            </div>
            <div className="relative">
              <label className="block text-xs text-gray-700 mb-1">End On Date</label>
              <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded bg-white">
                <input
                  type="text"
                  placeholder="MM/DD/YYYY"
                  className="text-sm outline-none w-32"
                />
                <Calendar size={16} className="text-gray-400" />
              </div>
            </div>
            <div className="mt-6">
              <button className="px-6 py-2 bg-teal-600 text-white text-sm rounded hover:bg-teal-700">
                Filter Result
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Total Orders</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Total Items Sold</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Revenues</th>
                </tr>
              </thead>
              <tbody>
                {orderReports.map((report, index) => (
                  <tr key={index} className="border-b border-gray-200">
                    <td className="py-3 px-4 text-sm text-gray-700">{report.date}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{report.totalOrders}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{report.totalItems}</td>
                    <td className="py-3 px-4 text-sm text-gray-700">{formatCurrency(report.revenue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="text-sm text-gray-600">{orderReports.length} Item(s)</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show</span>
              <select className="px-2 py-1 text-sm border border-gray-300 rounded bg-white">
                <option>10</option>
                <option>25</option>
                <option>50</option>
                <option>100</option>
              </select>
              <span className="text-sm text-gray-600">per page</span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded p-6 mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Top On Charts</h2>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900">Sales By GeoLocation</h3>
              <select
                value={geoYear}
                onChange={(e) => setGeoYear(e.target.value)}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded bg-white"
              >
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded p-8 mb-4" style={{ minHeight: '300px' }}>
              <div className="flex items-center justify-center h-full">
                <svg width="800" height="400" viewBox="0 0 1000 500">
                  <defs>
                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="#d1d5db" />
                    </pattern>
                  </defs>

                  <rect width="1000" height="500" fill="url(#dots)" />

                  <ellipse cx="200" cy="150" rx="80" ry="60" fill="#e5e7eb" opacity="0.5" />
                  <ellipse cx="450" cy="180" rx="100" ry="80" fill="#e5e7eb" opacity="0.5" />
                  <ellipse cx="700" cy="200" rx="120" ry="90" fill="#e5e7eb" opacity="0.5" />
                  <ellipse cx="350" cy="350" rx="90" ry="70" fill="#e5e7eb" opacity="0.5" />

                  <rect x="300" y="450" width="400" height="8" fill="#10b981" rx="4" />
                  <text x="250" y="460" fontSize="14" fill="#6b7280">0</text>
                  <text x="710" y="460" fontSize="14" fill="#6b7280">0</text>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {geoData.slice(0, 4).map((geo, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="text-sm text-gray-700">{geo.country}</span>
                  <span className="text-sm font-semibold text-gray-900">{formatCurrency(geo.sales)}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-900">Top Selling Products</h3>
              <select
                value={productsYear}
                onChange={(e) => setProductsYear(e.target.value)}
                className="px-3 py-1.5 text-sm border border-gray-300 rounded bg-white"
              >
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
              </select>
            </div>

            <div className="space-y-3">
              {topProducts.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      <div className="text-xs text-gray-600 mt-1">
                        {product.sales} units sold
                      </div>
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    {formatCurrency(product.revenue)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

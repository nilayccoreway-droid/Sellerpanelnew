import { ChevronDown, Info } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PaymentData {
  standardOrders: number;
  deferredTransactions: number;
  allAccounts: number;
  totalBalance: number;
  fundsAvailable: number;
  beginningBalance: number;
  amountCarriedForward: number;
  paidToAmazon: number;
  sales: number;
  expenses: number;
  accountLevelReserve: number;
  recentPayouts: Array<{
    date: string;
    amount: number;
  }>;
}

function generateRandomPaymentData(): PaymentData {
  const sales = Math.floor(Math.random() * 500000) + 100000;
  const expenses = Math.floor(Math.random() * 50000) + 10000;
  const paidToAmazon = Math.floor(Math.random() * 30000) + 5000;
  const amountCarriedForward = Math.floor(Math.random() * 20000) + 2000;
  const beginningBalance = Math.floor(Math.random() * 100000) + 20000;

  const netProceeds = beginningBalance - amountCarriedForward - paidToAmazon + sales - expenses;
  const fundsAvailable = Math.floor(netProceeds * 0.8);
  const totalBalance = netProceeds;

  const recentPayouts = Array.from({ length: 3 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (i * 7 + 3));
    return {
      date: date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }),
      amount: Math.floor(Math.random() * 80000) + 20000
    };
  });

  return {
    standardOrders: Math.floor(netProceeds * 0.7),
    deferredTransactions: Math.floor(netProceeds * 0.2),
    allAccounts: netProceeds,
    totalBalance,
    fundsAvailable,
    beginningBalance,
    amountCarriedForward,
    paidToAmazon,
    sales,
    expenses,
    accountLevelReserve: Math.floor(Math.random() * 10000),
    recentPayouts
  };
}

export default function PaymentsPage() {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);

  useEffect(() => {
    setPaymentData(generateRandomPaymentData());
  }, []);

  if (!paymentData) {
    return <div className="flex-1 bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  const formatCurrency = (amount: number) => {
    return `¥${amount.toLocaleString()}`;
  };

  const currentDate = new Date();
  const settlementStartDate = new Date(currentDate);
  settlementStartDate.setDate(1);
  const settlementPeriod = `${settlementStartDate.getMonth() + 1}/${settlementStartDate.getDate()}/${settlementStartDate.getFullYear()} - Present (Open)`;

  return (
    <div className="flex-1 bg-gray-50 overflow-auto">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
            Manage payments
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
            <span>Reports</span>
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-white border border-gray-300 rounded p-4">
            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-700">Standard Orders</span>
                  <span className="text-base font-normal">{formatCurrency(paymentData.standardOrders)}</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700">Deferred Transactions</span>
                  <Info size={14} className="text-gray-400" />
                </div>
                <span className="text-base font-normal">{formatCurrency(paymentData.deferredTransactions)}</span>
              </div>
              <div className="flex items-center justify-between px-4">
                <span className="text-sm text-gray-700">All Accounts</span>
                <span className="text-base font-normal">{formatCurrency(paymentData.allAccounts)}</span>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">Total Balance</span>
                <Info size={14} className="text-gray-400" />
              </div>
            </div>
            <div className="text-2xl font-normal mb-1">{formatCurrency(paymentData.totalBalance)}</div>
            <div className="space-y-2 mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Standard Orders</span>
                <span className="font-normal">{formatCurrency(paymentData.standardOrders)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Deferred Transactions</span>
                <span className="font-normal">{formatCurrency(paymentData.deferredTransactions)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-gray-300 rounded p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-900">Funds Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <select className="px-2 py-1 text-sm border border-gray-300 rounded bg-white">
                    <option>Now</option>
                    <option>Tomorrow</option>
                    <option>Next Week</option>
                  </select>
                  <button className="text-blue-600 text-sm">
                    <Info size={16} />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm pb-2 border-b">
                  <span className="text-gray-900">{formatCurrency(paymentData.fundsAvailable)}</span>
                 
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-900">{formatCurrency(paymentData.fundsAvailable)}</span>
                  
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-300 rounded p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm font-semibold text-gray-900">Recent Payouts</span>
                <Info size={14} className="text-gray-400" />
              </div>
              {paymentData.recentPayouts.length > 0 ? (
                <div className="space-y-2">
                  {paymentData.recentPayouts.map((payout, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">{payout.date}</span>
                      <span className="text-blue-600 font-medium">{formatCurrency(payout.amount)}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-600">No recent fund transfers.</p>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <div>
                <label className="block text-xs text-gray-700 mb-1">Account Type</label>
                <select className="px-3 py-1.5 text-sm border border-gray-300 rounded bg-white min-w-[200px]">
                  <option>Standard Orders</option>
                  <option>Deferred Transactions</option>
                  <option>All Accounts</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-700 mb-1">Settlement Period</label>
                <select className="px-3 py-1.5 text-sm border border-gray-300 rounded bg-white min-w-[250px]">
                  <option>{settlementPeriod}</option>
                </select>
              </div>
              <div className="ml-auto">
                <label className="block text-xs text-gray-700 mb-1">Find a transaction</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter order number"
                    className="px-3 py-1.5 text-sm border border-gray-300 rounded min-w-[200px]"
                  />
                  <button className="px-4 py-1.5 bg-teal-600 text-white text-sm rounded hover:bg-teal-700">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="max-w-2xl">
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-semibold text-gray-900">Net Proceeds</h3>
                  <Info size={14} className="text-gray-400" />
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  {settlementStartDate.getMonth() + 1}/{settlementStartDate.getDate()}/{settlementStartDate.getFullYear()} - Present
                </div>
                <div className="text-2xl font-normal text-gray-900 mb-4">{formatCurrency(paymentData.allAccounts)}</div>
              </div>

              <div className="space-y-1 bg-blue-50 px-4 py-3 rounded">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-gray-900">Beginning Balance</span>
                  <span className="text-sm font-normal">{formatCurrency(paymentData.beginningBalance)}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-blue-100">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">Amount Carried Forward</span>
                    <Info size={14} className="text-gray-400" />
                  </div>
                  <span className="text-sm font-normal text-red-600">-{formatCurrency(paymentData.amountCarriedForward)}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-blue-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">Paid to Zuuro</span>
                    <Info size={14} className="text-gray-400" />
                  </div>
                  <span className="text-sm font-normal text-blue-600">{formatCurrency(paymentData.paidToAmazon)}</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">Sales</span>
                    <Info size={14} className="text-gray-400" />
                  </div>
                  <span className="text-sm font-normal">{formatCurrency(paymentData.sales)}</span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-blue-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">Expenses</span>
                    <Info size={14} className="text-gray-400" />
                  </div>
                  <span className="text-sm font-normal">{formatCurrency(paymentData.expenses)}</span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">Account Level Reserve</span>
                    <Info size={14} className="text-gray-400" />
                  </div>
                  <span className="text-sm font-normal">{formatCurrency(paymentData.accountLevelReserve)}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Print Statement
                </button>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  View transactions for this period
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

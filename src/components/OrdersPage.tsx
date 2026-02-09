import { ChevronDown, Settings, FileText, MoreVertical } from 'lucide-react';

export default function OrdersPage() {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50">
              <span className="font-medium">Manage orders</span>
            </button>
            
          </div>
          <div className="flex items-center gap-3">

          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white border border-gray-300 rounded">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <h2 className="text-base font-semibold text-gray-900">Orders</h2>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Manage orders
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <select className="px-3 py-1.5 border border-gray-300 rounded text-sm bg-white">
                  <option>Last 90 days</option>
                  <option>Last 30 days</option>
                  <option>Last 7 days</option>
                </select>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded text-sm bg-white">
                  <span className="text-gray-700">(1)</span>
                  <ChevronDown size={14} />
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Seller fulfilled</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Pending</div>
                    <div className="text-2xl font-normal text-gray-900">0</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Unshipped</div>
                    <div className="text-2xl font-normal text-gray-900">0</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Canceled</div>
                    <div className="text-2xl font-normal text-gray-900">0</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Shipped</div>
                    <div className="text-2xl font-normal text-gray-900">0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <h2 className="text-base font-semibold text-gray-900">Returns</h2>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Manage returns
              </button>
            </div>

            <div className="p-4">
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Seller fulfilled</h3>
                <div className="text-xs text-gray-600">Last 90 days</div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-gray-600 mb-1">Pending actions</div>
                  <div className="text-2xl font-normal text-gray-900">0</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Completed</div>
                  <div className="text-2xl font-normal text-gray-900">0</div>
                </div>
                <div>
                  <div className="text-xs text-gray-600 mb-1">Total returns</div>
                  <div className="text-2xl font-normal text-gray-900">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">

          <div className="bg-white border border-gray-300 rounded">
            <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                </div>
                <h2 className="text-base font-semibold text-gray-900">Delivery Rates</h2>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                View shipping performance
              </button>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-semibold text-green-600">0%</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">Late shipment</div>
                  <div className="text-xs text-gray-500">Target under 4%</div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M10 3L4.5 8.5L2 6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-2xl font-semibold text-green-600">0%</span>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">Pre-fulfillment cancel</div>
                  <div className="text-xs text-gray-500">Target under 2.5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

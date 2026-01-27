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

              <div style="display:none;">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Fulfilled by Amazon</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Pending</div>
                    <div className="text-2xl font-normal text-gray-900">0</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Total</div>
                    <div className="text-2xl font-normal text-gray-900">0</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600 mb-1">Canceled</div>
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
          <div className="bg-white border border-gray-300 rounded" style="display:none;">
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
                <h2 className="text-base font-semibold text-gray-900">Claims</h2>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={16} />
              </button>
            </div>

            <div className="p-6 flex flex-col items-center justify-center min-h-[300px]">
              <div className="mb-4">
                <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
                  <ellipse cx="100" cy="130" rx="60" ry="8" fill="#E5E7EB"/>
                  <ellipse cx="100" cy="60" rx="80" ry="50" fill="#DBEAFE"/>
                  <rect x="70" y="70" width="20" height="35" rx="2" fill="#F59E0B"/>
                  <rect x="72" y="72" width="16" height="8" fill="#D97706"/>
                  <rect x="72" y="82" width="16" height="8" fill="#D97706"/>
                  <rect x="72" y="92" width="16" height="8" fill="#D97706"/>
                  <circle cx="115" cy="85" r="12" fill="#FED7AA"/>
                  <circle cx="115" cy="75" r="10" fill="#FED7AA"/>
                  <path d="M110 75 Q105 70 100 72" stroke="#1F2937" strokeWidth="1.5" fill="none"/>
                  <path d="M115 100 L115 115 L110 120 L115 125" stroke="#1F2937" strokeWidth="2" fill="none"/>
                  <path d="M115 100 L115 115 L120 120 L115 125" stroke="#1F2937" strokeWidth="2" fill="none"/>
                  <circle cx="140" cy="120" r="15" fill="#1F2937"/>
                  <circle cx="140" cy="120" r="10" fill="#6B7280"/>
                  <circle cx="140" cy="120" r="3" fill="white"/>
                  <circle cx="90" cy="125" r="12" fill="#1F2937"/>
                  <circle cx="90" cy="125" r="8" fill="#6B7280"/>
                  <circle cx="90" cy="125" r="2" fill="white"/>
                  <path d="M95 110 Q100 105 110 110" stroke="#1F2937" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <p className="text-sm text-gray-700 text-center">
                You don't have any outstanding claims or chargebacks. Great job!
              </p>
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

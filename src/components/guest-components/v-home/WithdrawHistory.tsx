"use client";

const transactions = [
  {
    id: 1,
    name: "Velma Langosh",
    status: "Processing",
    amount: "-₦80,000",
  },
  {
    id: 2,
    name: "Velma Langosh",
    status: "Processing",
    amount: "-₦80,000",
  },
  {
    id: 3,
    name: "Velma Langosh",
    status: "Processing",
    amount: "-₦80,000",
  },
];

const WithdrawHistory = () => {
  return (
    <div className="bg-white p-4 rounded-2xl w-full border">
      <h3 className="text-lg font-semibold mb-4">Withdraw History</h3>

      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            {/* Avatar & Details */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center bg-orange-200 text-orange-600 rounded-full font-semibold">
                TT
              </div>
              <div>
                <p className="text-sm font-semibold">{transaction.name}</p>
                {transaction.status && (
                  <span className="px-2 py-1 text-xs text-gray-600 bg-gray-200 rounded-md">
                    {transaction.status}
                  </span>
                )}
              </div>
            </div>

            {/* Withdraw Amount */}
            <div className="text-right">
              <p className="text-orange-500 text-xs font-semibold">Withdraw</p>
              <p className="text-gray-900 font-semibold">{transaction.amount}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WithdrawHistory;

import React from "react";

const transactions = [
  { name: "Velma Langosh", type: "Withdraw", date: "Jun. 23, 2024", amount: "₦80,000", status: "Processing", statusColor: "bg-yellow-300 text-yellow-800" },
  { name: "Velma Langosh", type: "Withdraw", date: "Jun. 23, 2024", amount: "₦80,000", status: "Successful", statusColor: "bg-green-200 text-green-800" },
  { name: "Velma Langosh", type: "Withdraw", date: "Jun. 23, 2024", amount: "₦80,000", status: "Successful", statusColor: "bg-green-200 text-green-800" },
  { name: "Velma Langosh", type: "Withdraw", date: "Jun. 23, 2024", amount: "₦80,000", status: "Successful", statusColor: "bg-green-200 text-green-800" },
  { name: "Velma Langosh", type: "Withdraw", date: "Jun. 23, 2024", amount: "₦80,000", status: "Declined", statusColor: "bg-gray-300 text-gray-800" },
];
interface TransactionsProps {
  title: string;
  limit: number;
}
const Transactions = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center justify-between border-b pb-3 last:border-b-0">
            <div className="flex items-center gap-3">
              <div className="  flex items-center justify-center rounded-full bg-[#ef5e17]/30 text-orange-700 font-bold text-[11.83px]"> <span className="p-2.5">TT</span></div>
              <div>
                <p className="text-[12px] font-medium">{transaction.name}</p>
                <div className="flex  items-center gap-2">
                <p className="text-[10px] text-gray-500">{transaction.type}</p>
              <span className={`px-2 py-0.5 text-[10px] rounded-md ${transaction.statusColor}`}>{transaction.status}</span>
                </div>
              </div>
            </div>
            <div className="items-center gap-3">
              <p className="text-[12px] text-gray-500">{transaction.date}</p>
              <p className="text-[12px] font-medium">{transaction.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;

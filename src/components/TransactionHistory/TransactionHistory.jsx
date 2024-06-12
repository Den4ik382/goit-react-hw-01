import TransactionList from "./TransactionList";
import transactions from "../../transaction.json";
export default function TransactionHistory() {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {transactions.map((transaction) => {
        return (
          <tbody key={transaction.id}>
            <TransactionList
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          </tbody>
        );
      })}
    </table>
  );
}

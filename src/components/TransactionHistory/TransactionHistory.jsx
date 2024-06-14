import TransactionList from "../TransactionList/TransactionList";
import transactions from "../../transaction.json";
import css from "./TransactionHistory.module.css";
import clsx from "clsx";
export default function TransactionHistory() {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.head}>
          <th className={css.list}>Type</th>
          <th className={css.list}>Amount</th>
          <th className={css.list}>Currency</th>
        </tr>
      </thead>

      {transactions.map((transaction, index) => {
        const background = clsx(index % 2 === 0 ? css.first : css.second);
        return (
          <tbody key={transaction.id} className={background}>
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

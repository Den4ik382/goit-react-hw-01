import TransactionList from "../TransactionList/TransactionList";
import css from "./TransactionHistory.module.css";
import clsx from "clsx";
export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.head}>
          <th className={css.list}>Type</th>
          <th className={css.list}>Amount</th>
          <th className={css.list}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => {
          const background = clsx(index % 2 === 0 ? css.first : css.second);
          return (
            <tr key={transaction.id} className={background}>
              <TransactionList
                type={transaction.type}
                amount={transaction.amount}
                currency={transaction.currency}
              />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

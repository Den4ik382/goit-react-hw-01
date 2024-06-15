import css from "./TransactionList.module.css";
export default function TransactionList({ type, amount, currency }) {
  return (
    <>
      <td className={css.infoTransaction}>{type}</td>
      <td className={css.infoTransaction}>{amount}</td>
      <td className={css.infoTransaction}>{currency}</td>
    </>
  );
}

import { currencyFormatter } from "../../util/formatting";

export default function CartItem({ item, onIncrease, onDecrease }) {
    const btnClass = "cursor-pointer text-xl w-6 h-6 rounded-xl border-none bg-stone-700 text-amber-600 flex justify-center items-center hover:bg-stone-950 hover:text-amber-700";
  return (
    <li className="flex justify-between items-center my-2 mx-0">
      <p className="m-0">{item.name} - {item.quantity} X {currencyFormatter.format(item.price)}</p>
      <p className="m-0 flex gap-4 items-center">
        <button className={btnClass} onClick={onDecrease}>-</button>
        <span>{item.quantity}</span>
        <button className={btnClass} onClick={onIncrease}>+</button>
      </p>
    </li>
  );
}

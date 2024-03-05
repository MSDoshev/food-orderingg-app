import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../../store/CartContext";
import Button from "../UI/Button"
import {currencyFormatter} from '../../util/formatting'
import UserProgressContext from "../../store/UserProgressContext";
import CartItem from "./CartItem";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx =  useContext(UserProgressContext);
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseCart(){
    userProgressCtx.hideCart();
  }
  

  return (
    <Modal open={userProgressCtx.progress === 'cart'}>
      <h2 className="my-4 mx-0 font-bold text-2xl">Your Cart</h2>
      <ul className="list-none my-2 mx-0 p-0">
        {cartCtx.items.map((item) => (
          <CartItem key={item.id} item={item} onIncrease={() => cartCtx.addItem(item)} onDecrease={() => cartCtx.removeItem(item.id)}/>
        ))}
      </ul>
      <p className="flex justify-end items-center my-2 mx-0 font-bold text-stone-800 text-xl">{currencyFormatter.format(cartTotal)}</p>
      <p className="flex justify-end gap-4">
        <Button textOnly onClick={handleCloseCart}>Close</Button>
        <Button onClick={handleCloseCart}>Go to Checkout</Button>
        </p>     
    </Modal>
  );
}

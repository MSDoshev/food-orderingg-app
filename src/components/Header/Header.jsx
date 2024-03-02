import logo from "../../assets/logo.jpg";
import Button from "../UI/Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-12 px-32">
      <div className="flex gap-4 items-center">
        <img src={logo} alt="Restaurant logo" className="w-16 h-16 object-contain rounded-full border-2 border-amber-500"/>
        <h1 className="uppercase font-bold text-4xl text-amber-600">Foodapp</h1>
      </div>
      <Button textOnly>Cart (0)</Button>
    </header>
  );
}

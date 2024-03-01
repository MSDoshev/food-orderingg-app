import logo from "../../assets/logo.jpg";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-12 px-32">
      <div className="flex gap-4 items-center">
        <img src={logo} alt="Restaurant logo" className="w-16 h-16 object-contain rounded-full border-2 border-amber-500"/>
        <h1 className="uppercase font-bold text-4xl text-amber-600">Foodapp</h1>
      </div>
      <button className="text-amber-600 hover:text-stone-100">Cart ()</button>
    </header>
  );
}

export default function Button({ children, textOnly, className, ...props }) {
  let cssClasses = textOnly
    ? "text-amber-600 hover:text-stone-100"
    : "bg-amber-600 px-4 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-600";
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}

import { currencyFormatter } from "../../util/formatting";
import Button from "../UI/Button";

export default function MealItem({ meal }) {
    
  return (
    <li
      key={meal.id}
      className="bg-slate-800 rounded-2xl overflow-hidden text-center shadow-md shadow-slate-950"
    >
      <article className="h-full flex flex-col justify-between">
        <img
          src={`http://localhost:3000/${meal.image}`}
          alt="Meal image"
          className="w-full h-80 object-cover"
        />
        <div>
          <h3 className="text-2xl font-bold my-3 mx-0">{meal.name}</h3>
          
          <p className="inline-block bg-slate-900 text-amber-600 text-sm font-bold py-2 px-8 m-0 rounded-md">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="m-4">{meal.description}</p>
        </div>
        <p className="mb-6">
            <Button>Add to Cart</Button>
            {/* <button className="bg-amber-600 px-4 py-2 rounded-lg hover:bg-slate-900 hover:text-amber-600">Add to Cart</button> */}
        </p>
      </article>
    </li>
  );
}

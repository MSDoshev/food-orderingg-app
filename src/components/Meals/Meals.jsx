import { useEffect, useState } from "react";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //..
      }

      const resData = await response.json();
      setLoadedMeals(resData);
    }

    fetchMeals();
  }, []);

  return (
    <ul className="w-11/12 max-w-6xl list-none my-8 mx-auto p-4 grid grid-cols-3 gap-4">
      {loadedMeals.map((meal) => 
       <li key={meal.id} className="bg-slate-800 rounded-2xl overflow-hidden text-center shadow-md shadow-slate-950">
          <article className="h-full flex flex-col justify-between">
            <img src={meal.image} alt="Meal image" className="w-full h-80 object-cover"/>
            <h3 className="text-2xl font-bold my-3 mx-0">{meal.name}</h3>
            <p className="m-4">{meal.description}</p>
            <p className="inline-block bg-slate-900 text-amber-600 text-sm font-bold py-2 px-8 m-0 rounded-md">{meal.price}</p>
          </article>
        </li>
      )}
    </ul>
  );
}

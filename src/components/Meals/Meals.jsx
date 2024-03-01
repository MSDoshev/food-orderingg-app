import { useEffect, useState } from "react";
import MealItem from "./MealItem";

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
       <MealItem key={meal.id} meal={meal}/>
      )}
    </ul>
  );
}

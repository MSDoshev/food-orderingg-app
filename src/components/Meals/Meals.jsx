import useHttp from "../../hooks/useHttp";
import Error from "../UI/Error";
import MealItem from "./MealItem";

const requsetConfig = {}; // created here to avoid infinite loop

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requsetConfig, []);

  console.log(loadedMeals);
  if (isLoading) {
    return <p className="text-center">Fetching meals...</p>;
  }


  if (error) {
    return <Error title="Failed to fetch meals!" message={error}/>
  }

  // if(!data){
  //   return <p>No meals found.</p>
  // }
  return (
    <ul className="w-11/12 max-w-6xl list-none my-8 mx-auto p-4 grid grid-cols-3 gap-4">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}

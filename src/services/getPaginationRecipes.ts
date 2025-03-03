export const getPaginationRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes?limit=50&skip=48");
  const { recipes } = await res.json();
  return recipes;
};

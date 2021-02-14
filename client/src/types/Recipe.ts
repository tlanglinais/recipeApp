export interface Recipe {
  id: number,
  name: string,
  prep_time: number,
  cook_time: number,
  servings: number,
  ingredients: Array<Ingredient>,
  steps: Array<string>,
}

export interface Ingredient {
  name: string,
  amount: string,
}
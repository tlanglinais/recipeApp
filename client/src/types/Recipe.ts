export interface Recipe {
  id: number,
  name: string,
  prep_time: TimeMeasure,
  cook_time: TimeMeasure,
  servings: string,
  ingredients: Array<Ingredient>,
  steps: Array<string>,
}

export interface Ingredient {
  name: string,
  amount?: string,
}

export interface TimeMeasure {
  unit: string,
  value: number
}
export interface Recipe {
  id: number;
  name: string;
  type: string;
  prepTime: TimeMeasure;
  cookTime: TimeMeasure;
  servings: string;
  ingredients: Array<Ingredient>;
  steps: Array<string>;
}

export interface Ingredient {
  name: string;
  amount?: string;
}

export interface TimeMeasure {
  unit: string;
  value: number;
}

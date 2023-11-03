import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MealsService {
  defaultMeals = [
    {
      value: 'breakfast',
      label: 'Завтрак',
      content: {} as any,
    },
    {
      value: 'launch',
      label: 'Обед',
      content: {} as any,
    },
    {
      value: 'dinner',
      label: 'Ужин',
      content: {} as any,
    },
  ];
  constructor(private api: ApiService) {}

  getMeals(date: string) {
    return this.api.getMeals(date).pipe(
      map((meals: any) => {
        if (!meals || !meals.length) {
          return [...this.defaultMeals];
        } else {
          return meals;
        }
      })
    );
  }
}

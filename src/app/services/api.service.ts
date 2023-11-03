import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private db: AngularFireDatabase) {}

  url = 'https://kk-food-default-rtdb.firebaseio.com/';

  search(item: string) {
    return this.http
      .get('https://api.calorieninjas.com/v1/nutrition?query=' + item, {
        headers: { 'X-Api-Key': 'M/5yxesrfco3NoasXwTsgg==eqnuKHUFjYHBvvmP' },
      })
      .pipe(map((res: any) => res.items));
  }

  addRecord(date: string, data: any) {
    return this.db.object(`meals/${date}`).set(data);
  }

  updateMeals(meals: any[], date: string) {
    return this.db.object(`meals/${date}`).update(meals);
  }

  getMeals(date: string) {
    return this.db.object(`meals/${date}`).valueChanges();
  }
}

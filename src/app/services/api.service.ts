import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  search(item: string) {
    return this.http
      .get('https://api.calorieninjas.com/v1/nutrition?query=' + item, {
        headers: { 'X-Api-Key': 'M/5yxesrfco3NoasXwTsgg==eqnuKHUFjYHBvvmP' },
      })
      .pipe(map((res: any) => res.items));
  }
}

import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { AddMealModalComponent } from './../add-meal-modal/add-meal-modal.component';
import { ApiService } from '../services/api.service';
import { MealsService } from '../services/meals.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  currentDate = new Date();
  currentDateString = this.currentDate.toDateString();

  meals: any[];

  constructor(
    private modalCtrl: ModalController,
    private api: ApiService,
    private mealsService: MealsService
  ) {}

  ngOnInit() {
    this.initDay(new Date());
  }

  addMeal(title: string) {
    this.meals.push({
      value: title,
      label: title,
      content: {} as any,
    });
    this.api.updateMeals(this.meals, this.currentDateString);
  }

  deleteMeal(id: number) {
    this.meals.splice(id, 1);
    this.api.updateMeals(this.meals, this.currentDateString);
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddMealModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.addMeal(data);
    }
  }

  go(direction: number) {
    const nextDay = this.currentDate;
    nextDay.setDate(nextDay.getDate() + direction);
    this.initDay(nextDay);
  }

  initDay(date: Date) {
    this.updateDate(date);

    this.mealsService
      .getMeals(this.currentDateString)
      .subscribe((meals: any[]) => {
        this.meals = meals;
      });
  }

  updateDate(date: Date) {
    this.currentDate = date;
    this.currentDateString = this.currentDate.toDateString();
  }
}

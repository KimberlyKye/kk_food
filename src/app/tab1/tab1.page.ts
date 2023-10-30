import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { AddMealModalComponent } from './../add-meal-modal/add-meal-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
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
  meals = this.defaultMeals;

  constructor(private modalCtrl: ModalController) {}

  addMeal(title: string) {
    this.meals.push({
      value: title,
      label: title,
      content: {} as any,
    });
  }

  deleteMeal(id: number) {
    this.meals.splice(id, 1);
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
}

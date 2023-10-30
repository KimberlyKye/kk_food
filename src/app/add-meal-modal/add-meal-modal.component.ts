import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-meal-modal',
  templateUrl: './add-meal-modal.component.html',
  styleUrls: ['./add-meal-modal.component.scss'],
})
export class AddMealModalComponent {
  name: string = '';

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.name, 'confirm');
  }
}

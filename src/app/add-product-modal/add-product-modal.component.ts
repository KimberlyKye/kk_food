import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent implements OnInit, OnChanges {
  @Input() data: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.data.current_serving_size_g = this.data.serving_size_g;
  }

  ngOnChanges() {
    this.data.current_serving_size_g = this.data.serving_size_g;
  }

  recalculate() {
    let c = this.data.current_serving_size_g / this.data.serving_size_g;
    let newData = {
      current_sugar_g: Number((this.data.sugar_g * c).toFixed(2)),
      current_fat_total_g: Number((this.data.fat_total_g * c).toFixed(2)),
      current_calories: Number((this.data.calories * c).toFixed(2)),
      current_protein_g: Number((this.data.protein_g * c).toFixed(2)),
      current_carbohydrates_total_g: Number(
        (this.data.carbohydrates_total_g * c).toFixed(2)
      ),
    };
    this.data = { ...this.data, ...newData };
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.recalculate();
    return this.modalCtrl.dismiss(this.data, 'confirm');
  }
}

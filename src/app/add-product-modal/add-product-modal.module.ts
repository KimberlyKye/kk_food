import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductModalComponent } from './add-product-modal.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AddProductModalComponent],
  imports: [IonicModule, CommonModule, FormsModule],
})
export class AddProductModalModule {}

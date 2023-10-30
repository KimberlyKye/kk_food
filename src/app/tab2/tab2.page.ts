import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable, of } from 'rxjs';
import { IonSearchbar, ModalController } from '@ionic/angular';
import { AddProductModalComponent } from '../add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  @ViewChild(IonSearchbar, { static: true })
  searchBar!: IonSearchbar;

  text: string = '';
  items$!: Observable<any>;
  currentItems: any[] = [];

  constructor(private api: ApiService, private modalCtrl: ModalController) {}

  search(item: any) {
    if (item.length > 2) {
      this.items$ = this.api.search(item);
    }
  }

  choose(item: any) {
    this.items$ = of([]);
    this.searchBar.value = null;
    this.currentItems.push(item);
  }

  async openModal(item: any) {
    const modal = await this.modalCtrl.create({
      component: AddProductModalComponent,
      componentProps: { data: item },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.choose(data);
    }
  }
}

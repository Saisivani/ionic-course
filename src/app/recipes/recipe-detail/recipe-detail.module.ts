import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecipeDetailPage } from './recipe-detail.page';
import { IonicRatingComponentModule } from 'ionic-rating-component';
import { StarRatingModule } from 'ionic5-star-rating';


const routes: Routes = [
  {
    path: '',
    component: RecipeDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StarRatingModule,
    IonicRatingComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecipeDetailPage]
})
export class RecipeDetailPageModule {}

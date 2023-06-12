import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
Recipes: Recipe[]=[
  new Recipe('pizza','best recipe every',
  'https://www.onceuponachef.com/images/2020/06/Margherita-Pizza-1200x1707.jpg '),
  new Recipe('mansaf','best jordanian recipe',
   'https://www.seriouseats.com/thmb/EgBZ3JxNFUZAd4rMLcZWzGZqaaE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20221208-Mansaf-Mai-Kakish-hero-ec9c515c00d24b5c9ef567854036f044.JPG')
]; 
}

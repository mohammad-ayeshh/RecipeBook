import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  Recipes: Recipe[] = [
    new Recipe('pizza', 'best recipe every',
      'https://www.onceuponachef.com/images/2020/06/Margherita-Pizza-1200x1707.jpg '),
    new Recipe('mansaf', 'best jordanian recipe',
      'https://www.seriouseats.com/thmb/EgBZ3JxNFUZAd4rMLcZWzGZqaaE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20221208-Mansaf-Mai-Kakish-hero-ec9c515c00d24b5c9ef567854036f044.JPG'),
    new Recipe('kosa ma7shy', 'I dont recommend it',
      'https://modo3.com/thumbs/fit630x300/167611/1491463902/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D9%85%D8%AD%D8%B4%D9%8A_%D8%A7%D9%84%D9%83%D9%88%D8%B3%D8%A7_%D9%81%D9%8A_%D8%A7%D9%84%D9%81%D8%B1%D9%86.jpg')
  ];
}
import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes : Recipe[] = [new Recipe('A Test Recipe', 'This is simply a test','https://i0.wp.com/picjumbo.com/wp-content/uploads/korean-bibimbap-flatlay.jpg?w=600&quality=80')]

}

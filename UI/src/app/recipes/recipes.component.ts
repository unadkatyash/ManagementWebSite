import { Component } from '@angular/core';
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeListComponent, RecipeDetailsComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {

}

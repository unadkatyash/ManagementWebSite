import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/korean-bibimbap-flatlay.jpg?w=600&quality=80'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://i0.wp.com/picjumbo.com/wp-content/uploads/korean-bibimbap-flatlay.jpg?w=600&quality=80'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

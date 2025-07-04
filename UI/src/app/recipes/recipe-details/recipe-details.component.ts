import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
})
export class RecipeDetailsComponent implements OnInit {
  @Input()
  recipe!: Recipe;

  constructor() {}

  ngOnInit() {}
}

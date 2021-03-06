import {RecipeService} from '../../../../../../service/recipe.service';
import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../../../../../model/recipe';

@Component({
  selector: 'app-my-recipe-list',
  templateUrl: './my-recipe-list.component.html',
  styleUrls: ['../recipes-list/recipes-list.component.css']
})

export class MyRecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  isRequestInProgress = true;

  constructor(
    private recipeService: RecipeService
  ) {
  }

  ngOnInit(): void {
    this.recipeService.findMyRecipes().subscribe(data => {
      this.recipes = data;
      this.isRequestInProgress = false;
    });

  }
}

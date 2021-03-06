import {Component, OnInit} from '@angular/core';
import {RecipeView} from '../../../../../../model/recipe-view';
import {RecipeService} from '../../../../../../service/recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: RecipeView[] = [];
  isRequestInProgress = true;

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.findAll().subscribe(data => {
      console.log(data);
      this.recipes = data;
      this.isRequestInProgress = false;
    });
  }
}

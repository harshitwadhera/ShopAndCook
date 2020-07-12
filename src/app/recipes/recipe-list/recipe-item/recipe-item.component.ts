<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
=======
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../model/recipe.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RecipesService } from 'src/app/service/recipe.service';

>>>>>>> origin/ShopAndCookFinal

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.sass']
})
export class RecipeItemComponent implements OnInit {

<<<<<<< HEAD
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  constructor() { }
=======
  @Input("recipe") recipe:Recipe;

  //@Output() recipeSelected = new EventEmitter<Recipe>();
  
  RecipeForm: FormGroup;
  constructor(private fb:FormBuilder,private recipeServce:RecipesService) {
    this.RecipeForm = fb.group({
      'name':['',Validators.required],
      'description':['',Validators.required],
      'ImagePath':['',Validators.required]
    })
   }
>>>>>>> origin/ShopAndCookFinal

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  recipeDetails(recipe:Recipe){
    this.recipeServce.recipeSelected.emit(recipe);
    console.log(recipe);  
  }

>>>>>>> origin/ShopAndCookFinal
}

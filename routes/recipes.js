/* eslint-disable no-undef */
const recipesController = require('../controllers/recipes');
const express = require('express');
const router = express.Router();

router.get('/', recipesController.getAll);

router.get('/:id', recipesController.getSingle);

//Call the funtion to create a new Recipe
router.post('/', recipesController.createNewRecipe);

//Update the Recipe from database
router.put('/:id', recipesController.updateRecipeInDatabase);

//Delete the Recipe from database
router.delete('/:id', recipesController.deleteRecipeFromDatabase);

//Get getIngredients 
router.get('/:id', recipesController.getIngredients);

//Update the Ingredients from database
/* router.put('/:id', parametersController.updateIngredientsInDatabase); */

module.exports = router;
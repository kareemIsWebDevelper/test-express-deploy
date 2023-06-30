var express = require('express');
var router = express.Router();

const Category = require("../models/category.model");

router.get('/', async (req, res, next) => {
  try {
    const categories = await Category.find().sort({createdAt: -1});
    res.status(200).json(categories);
  }
  catch (error) {
    res.status(404).json({error: error.message});
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const {id} = req.params;
    const category = await Category.findById({_id: id})
    res.status(200).json(category);
  }
  catch(error) {
    res.status(404).json({error: error.message});
  }
});

router.post('/', async (req, res, next) => {
  try {
    const {name, desc} = req.body;
    const newCategory = await Category.create({name, desc})
    res.status(200).json(newCategory)
  }
  catch(error) {
    res.status(400).json({error: error.message})
  }
});

router.patch('/:id', (req, res, next) => {
  res.json({msg: "Update category"});
});

router.delete('/:id', (req, res, next) => {
  res.json({msg: "Delete category"});
})

module.exports = router
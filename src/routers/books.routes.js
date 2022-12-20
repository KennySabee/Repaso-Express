const {Router} = require('express');
const {getbooks} = require('../controllers/books.controllers')
const routers = Router();
routers.get('/', getbooks)
module.exports = routers 
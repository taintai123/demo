var express = require('express');
var router = express.Router();

const CategoryController = require('../controllers/CategoryController')
// http://localhost:7777/categories

/**
 * lấy danh sách tất cả các danh mục 
 * method: GET
 * url: http://localhost:7777/categories
 * response: trả về danh sách các danh mục
 */
router.get('/', async (req, res, next) => {
    try {
        const categories = await CategoryController.getCategoryList()
        return res.status(200).json({status: true, data: categories});
    } catch (error) {
        console.log('Get category list error', error.message) 
        res.status(500).json({status: false, data: error.message})
    }
});

module.exports = router;

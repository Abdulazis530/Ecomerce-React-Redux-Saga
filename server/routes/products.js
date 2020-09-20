const express = require('express');
const router = express.Router();
const models = require('../models/index')
const path = require('path');
const API_SERVER="http://localhost:3001";
/* GET products listing. */
router.get('/', async (req, res) => {
        console.log('here')
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 3
        const offset = page * limit - limit

        const dataProducts = await models.Products.findAndCountAll({
            order: [
                ['createdAt', 'ASC']
            ],
            limit,
            offset
        })

        const totalPage = Math.ceil(dataProducts.count / limit)
        const response = {
            totalPage,
            data:dataProducts.rows
        }
        response.tes='tes'
        res.json(response)

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

router.get('/:id', async (req, res) => {
    console.log(req.params.id)
    console.log('wkwkwkkwkw')
    try {
        const product = await models.Products.findByPk(req.params.id)
        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, rate, description, price, brand, detailProduct } = req.body
        
        const file = req.files.image
        const fileName = file.name.toLowerCase().replace("", Date.now()).split(' ').join('-')
        await file.mv(path.join(__dirname, "..", "public", "images", fileName))

        const product = await models.Products.create({ 
            title,
            rate:Number(rate),
            description,
            price,
            brand,
            detail_product:detailProduct,
            image:`${API_SERVER}/images/${fileName}`,
            
        })

        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});


router.put('/:id', async (req, res) => {
    try {
        const product = await models.Products.update({
            vote: req.body.vote,

        }, {
            returning: true,
            where: {
                id: req.params.id
            }
        })
        res.json(product);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const targetProducts = await models.Products.findByPk(req.params.id)
        if (targetProducts) {
            await models.Products.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json(targetProducts);
        }

    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});
module.exports = router;

var express = require('express');
var router = express.Router();
var models = require('../models/index')
/* GET todos listing. */
router.get('/', async (req, res) => {
    try {
        const todos = await models.Todo.findAll({})
        res.json(todos)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const todo = await models.Todo.findByPk(req.params.id)
        res.json(todo);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

router.post('/', async (req, res) => {
    try {
        const todo = await models.Todo.create({ title: req.body.title, UserId: req.body.userId })
        res.json(todo);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});


router.put('/:id', async (req, res) => {
    try {
        const todo = await models.Todo.update({
            title: req.body.title,
            complete: req.body.complete
        }, {
            returning:true,
            where: {
                id: req.params.id
            }
        })
        res.json(todo);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const targetTodo = await models.Todo.findByPk(req.params.id)
        if(targetTodo){
            await models.Todo.destroy({
                where: {
                    id: req.params.id
                }
            })
            res.json(targetTodo);
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
});
module.exports = router;

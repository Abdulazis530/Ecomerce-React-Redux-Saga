var express = require('express');
var router = express.Router();
var models = require('../models/index')
/* GET users listing. */
router.get('/', async (req, res) => {
  try {
    const user = await models.User.findAll({
      include:[{
        model:models.Todo
      }]
    })
    res.json(user)
  }catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  try {
    const user = await models.User.create({ email: req.body.email })
    res.json(user);
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }

});
module.exports = router;

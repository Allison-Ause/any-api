const { Router } = require('express');
const Crystal = require('../models/Crystals');
const router = Router();

module.exports = router;

router
  .get('/:id', async (req, res) => {
    const singleCrystal = await Crystal.getById(req.params.id);
    res.json(singleCrystal);
  })

  .get('/', async (req, res) => {
    const crystals = await Crystal.getAll();
    res.json(crystals);
  });

const { Router } = require('express');
const Crystal = require('../models/Crystals');
const router = Router();

module.exports = router;

router
  .get('/crystals/:id', async (req, res) => {
    const singleCrystal = await Crystal.getById(req.params.id);
    res.json(singleCrystal);
  })

  .get('/crystals', async (req, res) => {
    const crystals = await Crystal.getAll();
    res.json(crystals);
  });

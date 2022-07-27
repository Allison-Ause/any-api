const { Router } = require('express');
const Crystal = require('../models/Crystals');
const router = Router();

module.exports = router;

router.get('/', async (req, res) => {
  const crystals = await Crystal.getAll();
  console.log(crystals);
  res.json(crystals);
});

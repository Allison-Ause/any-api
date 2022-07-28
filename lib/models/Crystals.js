const pool = require('../utils/pool');

module.exports = class Crystal {
  id;
  name;
  meaning;
  zodiac_sign;
  rare;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.meaning = row.meaning;
    this.zodiac_sign = row.zodiac_sign;
    this.rare = row.rare;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM crystals;');
    return rows.map((row) => new Crystal(row));
  }
};

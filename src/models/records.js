const db = require("../utils/database");

function addRecord(id, name) {
  let sql = `INSERT INTO record (stu_id, name)
    VALUES  ('${id}', '${name}')`;
  db.query(sql);
}

async function getRecords() {
  let sql = `SELECT * FROM record`;
  let records = db.query(sql);
  return records;
}

module.exports = { addRecord, getRecords };

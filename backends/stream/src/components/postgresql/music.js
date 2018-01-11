const { query } = require('./handle/operate');

const insert = async data => {
  return await query(
    'insert into music(name, data) values($1::varchar, $2::bytea)',
    data
  );
};

const select = async data => {
  const result = await query('select data from music where name = $1', data);
  return result.rows[0];
};

const update = async data => {
  return await query('update music set name = $1 where name = $2', data);
};

const remove = async data => {
  return await query('delete from music where name = $1', data);
};

module.exports = {
  insert,
  select,
  update,
  remove
};

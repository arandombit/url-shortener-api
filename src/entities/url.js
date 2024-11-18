import knex from '../utils/knex'

const read = (props = {}) =>
  knex
    .select(['id', 'value'])
    .from('urls')
    .where(props)

const write = value =>
  knex('url')
    .insert({ value })

const exists = props =>
  read(props)
    .then(data => data.length > 0)

export default {
  exists,
  read,
  write
}

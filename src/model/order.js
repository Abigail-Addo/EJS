
const { Model } = require('objection');
const knex = require('../config/db')


Model.knex(knex);

class Order extends Model {
    static tableName = 'orders';

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                name: { type: 'string' },
                price: { type: 'integer' },
                description: { type: 'string' },
                is_vegetarian: { type: 'string' },
                created_at: { type: 'boolean' },
                updated_at: { type: 'string' }
            }
        };
    };
  }

  module.exports = Order;
'use strict';

const orders = require('./order-initial-data');
const uuid = require('uuid');

const findOrderById = orderId => orders.find(o => o.orderId === orderId);

module.exports = {
	getAsync: () => Promise.resolve(orders),
	storeAsync: order => {
		const existingOrder = findOrderById(order && order.orderId);
		if (existingOrder) {
			Object.assign(existingOrder, order);
			return Promise.resolve(existingOrder);
		}

		orders.push(order);
		order.orderId = uuid.v4();
		return Promise.resolve(order);
	},
	deleteAsync: orderId => {
		const order = findOrderById(orderId);
		if (order) {
			orders.splice(orders.indexOf(order), 1);
			return Promise.resolve(true);
		}

		return Promise.resolve(false);
	},
	findByIdAsync: orderId => Promise.resolve(findOrderById(orderId))
};

'use strict';

const OrderDB = require('./order-inmemory-db');

class OrderRepository {
	constructor() {}

	getAllAsync() {
		return OrderDB.getAsync();
	}

	storeAsync(order) {
		return OrderDB.storeAsync(order);
	}

	deleteAsync(orderId) {
		return OrderDB.deleteAsync(orderId);
	}

	findByIdAsync(orderId) {
		return OrderDB.findByIdAsync(orderId);
	}
}

module.exports = OrderRepository;

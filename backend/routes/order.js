'use strict';

const express = require('express');
const OrderRepository = require('../model/order-repository');

const _repo = new OrderRepository();

const router = express.Router();

const buildAsyncResponse =
	asyncMethod =>
		(req, res) =>
			asyncMethod(req, res)
				.then(
					data => res.json(data),
					error => {
						res.staus = 500;
						res.json(error);
					}
				);

router.get(
	'/all',
	buildAsyncResponse(() => _repo.getAllAsync())
);

router.get(
	'/:id',
	buildAsyncResponse(req => _repo.findByIdAsync(req.params.id))
);

router.post(
	'/',
	buildAsyncResponse(req => _repo.storeAsync(req.body))
);

router.put(
	'/',
	buildAsyncResponse(req => _repo.storeAsync(req.body))
);

router.delete(
	'/:orderId',
	buildAsyncResponse(req => _repo.deleteAsync(req.params.orderId))
);

module.exports = router;

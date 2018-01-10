const express = require('express');
const router = express.Router();

/* GET home page. */
router.get(
	'/',
	(req, res) => res.render('index', { title: 'CloudSense UI Dev Task' })
);

module.exports = router;

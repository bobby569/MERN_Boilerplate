const requireSomething = require('../middlewares/requireSomething');

module.exports = app => {
	app.get('/test', requireSomething, (req, res) => {
		res.send('Hello world');
	});
};

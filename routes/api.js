const requireSomething = require('../middlewares/requireSomething');

module.exports = app => {
	app.get('/', requireSomething, (req, res) => {
		res.send('Hello world');
	});
};

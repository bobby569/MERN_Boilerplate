const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	app.get('/profile', requireLogin, (req, res) => {
		res.send('Login successfully!');
	});

	app.post('/api/login', (req, res) => {});

	app.post('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};

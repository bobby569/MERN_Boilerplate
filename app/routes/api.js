const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
	app.get('/user', requireLogin, (req, res) => {
		res.send('Login successfully!');
	});

	app.post('/login', passport.authenticate('local'), (req, res) => {
		res.redirect(`/user/${req.user.username}`);
	});

	app.post('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
};

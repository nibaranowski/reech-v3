const Authentication = require('../controllers/authentication');
const Middlewares = require('./middlewares');
const api = require('./api');

const router = require('express').Router();

router.use('/api', Middlewares.loginRequired, api);
router.post('/signup', Authentication.signup);
router.post('/signin', Authentication.signin);

export default router;

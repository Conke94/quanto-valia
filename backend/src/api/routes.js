import { Router } from 'express';

import { presidentRouter } from './modules/President/president.route.js';

const router = Router();

router.use('/president', presidentRouter);

export default router;
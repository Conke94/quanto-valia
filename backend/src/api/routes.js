import { Router } from 'express';

import { presidentRouter } from './modules/President/president.route.js';
import { inflationRouter } from './modules/Inflation/inflation.route.js';


const router = Router();

router.use('/president', presidentRouter);
router.use('/inflation', inflationRouter);

export default router;
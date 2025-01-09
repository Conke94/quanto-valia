import { Router } from 'express';

import { presidentRouter } from './president.js';

const router = Router();

router.use('/president', presidentRouter);

export default router;
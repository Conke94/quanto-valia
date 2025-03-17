import { Router } from 'express';

import { MinimumWageFactory } from './index.js';

const router = Router();

const { controller } = MinimumWageFactory.createInstance();

router.get('/external', controller.externalIndex);
router.get('/accumulated', controller.accumulatedIndex);

router.post('/upsert', controller.upsert);

export { router as minimumWageRouter };
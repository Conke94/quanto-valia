import { Router } from 'express';

import { InflationFactory } from '../Inflation/index.js';

const router = Router();

const { controller } = InflationFactory.createInstance();

router.get('/', controller.index);
router.get('/external', controller.externalIndex);

router.post('/upsert', controller.upsert);

export { router as inflationRouter };
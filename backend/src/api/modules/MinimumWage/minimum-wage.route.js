import { Router } from 'express';

import { MinimumWageFactory } from './index.js';

const router = Router();

const { controller } = MinimumWageFactory.createInstance();

router.get('/external', controller.externalIndex);

export { router as minimumWageRouter };
import { Router } from 'express';

import { PresidentFactory } from '../factories/president.js';

const router = Router();

const { controller } = PresidentFactory.createInstance();

router.get('/', controller.index);

export { router as presidentRouter };
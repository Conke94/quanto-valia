import mongoose from 'mongoose'

import logger from '../../api/utils/logger.js';

const DATABASE_URI = "mongodb://localhost:27017/quanto-valia"

export async function connectDatabase() {
  try{
    logger.info("[Database] connectDatabase init");
    if(mongoose.connection.readyState != 1){
        await mongoose.connect(DATABASE_URI);
        logger.info("[Database] connectDatabase success");
    }
  } catch(error){
    logger.info("[Database] connectDatabase error", error);
  } finally {
    logger.info("[Database] connectDatabase finish");
  }
} 
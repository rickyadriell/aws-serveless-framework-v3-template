import { logger } from '@/utils/logger';
import { Handler } from 'aws-lambda';

const HelloWorld: Handler = async (event) => {
  logger.info('HelloWorld invoked', { event });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World' }),
  };
};

export const handler = HelloWorld;

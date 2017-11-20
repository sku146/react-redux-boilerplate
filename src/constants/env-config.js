import isString from 'lodash/isString';
import isEmpty from 'lodash/isEmpty';
import envConfigurations from '../../configs/environments';

const serverEnv = process.env.environment;
const localEnv = (process.env.NODE_ENV === 'production') ? 'dev' : 'local';
export const envVariable = (!isEmpty(serverEnv) && isString(serverEnv)) ? serverEnv : localEnv;

export default envConfigurations[envVariable];

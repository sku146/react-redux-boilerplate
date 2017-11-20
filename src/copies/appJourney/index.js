/* global webpack */
import merge from 'lodash/merge';
import { CopyProvider } from 'utils';
import enGB from './en-GB.json';

const brandCopies = {};
const brandCopy = brandCopies[webpack.brandName] || {};
const commonCopy = {
  'en-GB': enGB,
};
const appCopy = merge(commonCopy, brandCopy);

const provider = new CopyProvider('en-GB', appCopy);
provider.getResource = provider.getCopy.bind(provider);
export const { getResource } = provider;
export default provider;

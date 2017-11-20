/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
import isEmpty from 'lodash/isEmpty';
import result from 'lodash/result';
import toUpper from 'lodash/toUpper';
import toLower from 'lodash/toLower';
import template from 'lodash/template';
/**
 * @description Renders a copy text from resources
 import {isEmpty, result, template} from 'lodash';
 import Resources from './resources';

 /**
 * @description Renders a copy text from resources
 * @prop lang {string} localization type, default=en-GB
 * @prop resources {object} collection of JSON resources
 * @prop locals {object} resource objects
 * @prop tKey {string} object reference
 * @prop attr {object} objects for template manipulation
 * @prop transform {string} string transform value
 * @Example
 * const provider = new CopyProvider('en-GB', resources);
 * provider.getResource = provider.getCopy.bind(provider);
 * {CopyProvider.getCopy('help.callUS', {}, 'lower')}
 */

class CopyProvider {
  constructor(lang = 'en-GB', resources = {}, resourceType = 'nested') {
    this.resources = resources[lang];
    this.lang = lang;
    this.resourceType = resourceType;
  }

  static getValue(locals = {}, tKey = '', resourceType = 'nested') {
    if (!isEmpty(locals) && !isEmpty(tKey)) {
      if (resourceType === 'nested') {
        return result(locals, tKey, tKey);
      }
      return locals[tKey] || tKey;
    }
    console.warn('Please provide copy object and key to getValue');
    return tKey;
  }

  getResources() {
    return this.resources;
  }

  getLocale() {
    return this.lang;
  }

  static transform(transform = '', resource = '') {
    if (isEmpty(resource)) {
      return resource;
    }
    switch (transform) {
      case 'uppercase':
        return toUpper(resource);
      case 'lowercase':
        return toLower(resource);
      default:
        console.warn(`Transformation for ${transform} is not available`);
        return resource;
    }
  }

  getCopy(tKey = '', attr = {}, transform = '') {
    let keyValue = CopyProvider.getValue(this.resources, tKey, this.resourceType);
    if (!isEmpty(attr)) {
      keyValue = template(keyValue)(attr);
    }
    if (!isEmpty(transform)) {
      keyValue = CopyProvider.transform(transform, keyValue);
    }
    return keyValue;
  }
}

export default CopyProvider;

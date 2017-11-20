import copyProvider, { getResource } from 'copies/appJourney';
import { transform, getValue } from 'utils/copy-provider';

describe('Copy Helper', () => {
  it('should set en-GB as the copy helper lang & copy file by default', () => {
    copyProvider.constructor();
    expect(copyProvider.lang).toEqual('en-GB');
  });

  it('should set provided langues as the copy helper lang & copy file if one is provided', () => {
    copyProvider.constructor('en-US');
    expect(copyProvider.lang).toEqual('en-US');
  });

  it('should set provided resourceType as a nested', () => {
    copyProvider.constructor('en-US', {}, 'nested');
    expect(copyProvider.resourceType).toEqual('nested');
  });

  it('should set provided resourceType as a single', () => {
    copyProvider.constructor('en-US', {}, 'single');
    expect(copyProvider.resourceType).toEqual('single');
  });

  it('should set resources propperty to provided resources', () => {
    const expected = {'en-US': 'some-resource'};
    copyProvider.constructor('en-US', expected);
    const actual = copyProvider.resources;
    expect(actual).toEqual(expected['en-US']);
  });

  describe('Execute getLocale', () => {
    it('should return the set language', () => {
      const language = 'some-locale';
      copyProvider.constructor(language);
      const actual = copyProvider.getLocale();
      const expected = language;

      expect(actual).toEqual(expected);
    });
  });

  describe('Execute getResources', () => {
    it('should return the class\' resources variable', () => {
      const resources = 'some-resources';
      copyProvider.resources = resources;

      const actual = copyProvider.getResources();

      expect(actual).toEqual(resources);
    });
  });

  describe('Execute getValue', () => {
    it('should return an empty string and print a warning if not provided any parameters', () => {
      const warningText = 'Please provide copy object and key to getValue';
      const consoleWarningMock = jest.fn();
      global.console.warn = consoleWarningMock;

      const actual = getValue();
      expect(consoleWarningMock.mock.calls[0][0]).toEqual(warningText);
      expect(actual).toEqual('');
    });
    it('should return an empty string and print a warning if not provided a tKey parameter', () => {
      const warningText = 'Please provide copy object and key to getValue';
      const consoleWarningMock = jest.fn();
      global.console.warn = consoleWarningMock;

      const actual = getValue({});
      expect(consoleWarningMock.mock.calls[0][0]).toEqual(warningText);
      expect(actual).toEqual('');
    });
    it('should return provided key if key does not exist in provided locale object', () => {
      const key = 'cupcakes';
      const dataObject = {
        topFlavor: 'vanilla',
        worstFlavor: 'chocolate',
      };

      expect(getValue(dataObject, key)).toEqual(key);
    });
    it('should return value of key from provided locale object if value exists', () => {
      const key = 'topFlavor';
      const dataObject = {
        topFlavor: 'vanilla',
        worstFlavor: 'chocolate',
      };
      expect(getValue(dataObject, key)).toEqual('vanilla');
    });

    it('should return value of key from provided locale object if value exists in resource type single', () => {
      const key = 'topFlavor';
      const dataObject = {
        topFlavor: 'vanilla',
        worstFlavor: 'chocolate',
      };
      expect(getValue(dataObject, key, 'single')).toEqual('vanilla');
    });

    it('should return key from provided locale object if value is not exists in type single', () => {
      const key = 'help.topFlavor';
      const dataObject = {
        topFlavor: 'vanilla',
        worstFlavor: 'chocolate',
      };
      expect(getValue(dataObject, key, 'single')).toEqual('help.topFlavor');
    });
  });

  describe('Execute transform', () => {
    it('should return empty string when not provided a resource parameter', () => {
      const actual0 = transform('uppercase');
      const actual1 = transform();
      expect(actual0).toEqual('');
      expect(actual1).toEqual('');
    });
    it('should handle uppercase transformations', () => {
      const initialCopy = 'capitalize this';
      const actual = transform('uppercase', initialCopy);
      const expected = 'CAPITALIZE THIS';

      expect(actual).toEqual(expected);
    });
    it('should handle lowercase transformations', () => {
      const initialCopy = 'LOWERCASE THIS';
      const actual = transform('lowercase', initialCopy);
      const expected = 'lowercase this';

      expect(actual).toEqual(expected);
    });
    it('should print a warning if requested transform is not available', () => {
      const initialCopy = 'LOWERCASE THIS';
      const warningText = 'Transformation for someTransform is not available';
      const consoleWarningMock = jest.fn();
      global.console.warn = consoleWarningMock;

      const actual = transform('someTransform', initialCopy);
      expect(consoleWarningMock.mock.calls[0][0]).toEqual(warningText);
      expect(actual).toEqual(initialCopy);
    });
  });
  describe('Exectute getResource & getCopy', () => {
    it('should return an empty string if not provided any parameters', () => {
      const actual = copyProvider.getCopy();
      expect(actual).toEqual('');
    });
    it('return the key value merged with attr values', () => {
      // eslint-disable-next-line no-template-curly-in-string
      expect(getResource('welcome ${name}', {name: 'sapient'})).toEqual('welcome sapient');
      // eslint-disable-next-line no-template-curly-in-string
      expect(copyProvider.getCopy('welcome ${name}', {name: 'sapient'})).toEqual('welcome sapient');
    });
    it('should call transform if provided transform options', () => {
      const copy = copyProvider.getCopy('test', {}, 'uppercase');
      expect(copy).toEqual('TEST');
    });
    it('should not call this.transform if not provided transform options', () => {
      const copy = copyProvider.getCopy('test');
      expect(copy).toEqual('test');
    });
  });
});

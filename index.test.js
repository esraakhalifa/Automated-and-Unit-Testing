import test from 'ava';
import { expect } from 'chai';

import addLanguageCodetoUrl from './addLanguageCodetoUrl.js';

test('should return "/home-fr-FR" when input is "fr-FR"', t => {
  const result = addLanguageCodetoUrl('fr-FR');
  expect(result).to.equal('/home-fr-FR');
  t.pass();
});

test('should return "/home-en-UK" when input is "en-UK"', t => {
  const result = addLanguageCodetoUrl('en-UK');
  expect(result).to.equal('/home-en-UK');
  t.pass();
});

test('should return "/home-ar-EG" when input is "ar-EG"', t => {
  const result = addLanguageCodetoUrl('ar-EG');
  expect(result).to.equal('/home-ar-EG');
  t.pass();
});

test('should return "/home-en-UK" when input is unsupported language', t => {
  const result = addLanguageCodetoUrl('es-ES');
  expect(result).to.equal('/home-en-UK');
  t.pass();
});

test('should trim input and return "/home-ar-EG"', t => {
  const result = addLanguageCodetoUrl('   ar-EG ');
  expect(result).to.equal('/home-ar-EG');
  t.pass();
});
test('should throw an error when input is not a string', t => {
  const error = t.throws(() => {
    addLanguageCodetoUrl(123);
  }, { instanceOf: Error });

  expect(error.message).to.equal('Invalid input: language must be a string');
  t.pass();
});

test('should return default "/home-en-UK" when input is empty string', t => {
    const result = addLanguageCodetoUrl('');
    expect(result).to.equal('/home-en-UK');
    t.pass();
  });
  


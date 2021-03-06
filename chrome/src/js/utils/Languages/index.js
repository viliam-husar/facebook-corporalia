import Settings from 'utils/Settings';

import cs from './lang/cs';
import en from './lang/en';
import es from './lang/es';
import nl from './lang/nl';
import sk from './lang/sk';
import sk_lu from './lang/sk-lu';

const ALL = [
  cs,
  en,
  es,
  nl,
  sk,
  sk_lu
];

function getAvailable() {
  return ALL.slice();
}

function getSelected() {
  return Settings.get().then(({ language }) => language);
}

function find(languageCode) {
  const majorLanguageCode = languageCode.split(/-_/).shift().toLowerCase();

  return ALL.find(({ code }) => code === majorLanguageCode);
}

function detect(document) {
  const siteLanguageCode = document.documentElement.getAttribute('lang');
  const navigatorLanguageCode = navigator.language;
  const detectedlanguage = find(siteLanguageCode) || find(navigatorLanguageCode) || find('en');

  return detectedlanguage || null;
}

export default {
  detect,
  find,
  getAvailable,
  getSelected
};

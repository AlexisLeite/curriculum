const path = require('path');
const fs = require('fs');

const translations = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, `${process.env.TRANSLATE_LANG}.translations.json`))
);

function getMap(target, path) {
  path = path.split('/').filter((dir) => dir !== '');
  while (path.length) {
    const dir = path.shift();
    if (typeof target !== 'object') throw new Error(`Wrong path ${path} on:`, target);
    target = target[dir];
  }
  return target;
}

exports.default = function (source) {
  const { language } = this.getOptions();
  let regex = /\{\/\*\*TRANSLATE (\w+) \*\/\}/g;
  let result;
  while ((result = regex.exec(source))) {
    source = source.replace(
      result[0],
      getMap(translations, result[1]) ?? `Missing translation: ${result[1]}`
    );
  }
  regex = /getTranslations *\(['"`](\w+)['"`]\)/g;
  result;
  while ((result = regex.exec(source))) {
    source = source.replace(
      result[0],
      `JSON.parse(\`${JSON.stringify(getMap(translations, result[1]))}\`)` ??
        `Missing translation: ${result[1]}`
    );
  }
  regex = /translate *\(['"`]([ \w]+)['"`]\)/g;
  result;
  while ((result = regex.exec(source))) {
    const translation = getMap(translations, result[1]);
    console.log(result[1], translation);
    if (!translation) console.log(`Missing translation: ${result[1]}`);
    source = source.replace(
      result[0],
      translation ? `"${translation}"` : `"Missing translation: ${result[1]}"`
    );
  }

  return source;
};

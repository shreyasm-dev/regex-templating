const templateRegex = (regex, replaceChar = '&') => {
  if (!(regex instanceof RegExp || typeof regex === 'string')) {
    throw new Error('Parameter "regex" must be a regex or a string');
  } else if (typeof replaceChar !== 'string') {
    throw new Error('Parameter "replaceChar" must be a string');
  }

  let regexSource = regex;
  if (regex instanceof RegExp) {
    regexSource = regex.source;
  }

  return (replacement) => {
    if (!(replacement instanceof RegExp || typeof replacement === 'string')) {
      throw new Error('Parameter "inserted" must be a regex or a string');
    }

    if (replacement instanceof RegExp) {
      replacement = replacement.source;
    }

    regexSource = regexSource.replace(replaceChar, `(?:${replacement})`);
    return new RegExp(regexSource, regex.flags);
  };
};

module.exports = templateRegex;

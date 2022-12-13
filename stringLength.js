const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    return 'The length is not within 1 to 10';
  } else return string.length;
};

module.exports = stringLength;
console.log(stringLength(''));

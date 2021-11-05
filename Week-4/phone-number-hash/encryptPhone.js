/**
 * @function encryptPhoneNumber should take a phone number and hash it for security and privacy purposes.
 * @param number will always be a string formatted as such '111-223-1123'. Your function should return the first 6 digits as * and only the last 4 shown. Ex:
 * ' 111-223-1123 ' should be ' ***-***-1123 '
 */
function encryptPhoneNumber(num) {
  let numArr = num.split('-');

  let tempArr = numArr.splice(0, 2);
  tempArr = tempArr.join('').split('');

  let counter = 1;

  for (let i = 0; i < tempArr.length; i++) {
    tempArr[i] = '*'
  }

  for (let i = 1; i < tempArr.length; i++) {
    if (counter === 3) {
      tempArr.splice(i, 0, '-')
      counter++
    }
    else if (counter === 7) {
      tempArr.push('-')
    }
    counter++
  }

  let hashed = tempArr.join('') + numArr.join('');
  return hashed;
}

let num = '929-354-5054';
console.log(encryptPhoneNumber(num));

module.exports = encryptPhoneNumber;

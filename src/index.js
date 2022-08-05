module.exports = function toReadable (number) {
  let numbers = ([['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'], 
  ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'], 
  ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']])
  let num = number.toString();
  if (num.length == 1) {
    return `${numbers[0][num]}`
  }
  if (num.length == 2 && num[0] == 1) {
    return `${numbers[1][num[1]]}`
  }
  if (num.length == 2 && num[1] == 0) {
    return `${numbers[2][num[0]]}`
  }
  if (num.length == 2) {
    return `${numbers[2][num[0]]} ${numbers[0][num[1]]}`
  }
  if (num.length == 3 && num[1] == 1) {
    return `${numbers[0][num[0]]} hundred ${numbers[1][num[2]]}`
  }
  if (num.length == 3 && num[1] != 0 && num[2] == 0) {
    return `${numbers[0][num[0]]} hundred ${numbers[2][num[1]]}`
  }
  if (num.length == 3 && num[1] == 0 && num[2] != 0) {
    return `${numbers[0][num[0]]} hundred ${numbers[0][num[2]]}`
  }
  if (num.length == 3 && num[1] == 0 && num[2] == 0) {
return (`${numbers[0][num[0]]} hundred`.trim())
  }
  if (num.length == 3) {
    return `${numbers[0][num[0]]} hundred ${numbers[2][num[1]]} ${numbers[0][num[2]]}`
  }
}


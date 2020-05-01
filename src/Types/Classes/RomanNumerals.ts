class RomanNumerals {
  static roman(num: number) {
    var romanArray: string[] = []
    var digits: string[] = num.toString().split("").reverse()
    var digiLeng = digits.length
    var romanDigitSet = [
      { ones: "I", fives: "V", tens: "X" },
      { ones: "X", fives: "L", tens: "C" },
      { ones: "C", fives: "D", tens: "M" },
      { ones: "M", fives: "", tens: "" },
    ]

    for (var i = 0; i < digiLeng; i++) {
      var n = parseInt(digits[i], 10)
      romanArray.unshift(translator(n, romanDigitSet[i]))
    }
    return romanArray.join("")
    // Your code here
  }
}

function translator(n: number, set: { ones: string; fives: string; tens: string }): string {
  var ones = set.ones,
    fives = set.fives,
    tens = set.tens
  if (n === 0) {
    return ""
  } else if (n < 4) {
    return Array(n).fill(ones).join("")
  } else if (n === 4) {
    return ones.concat(fives)
  } else if (n < 9) {
    return fives.concat(
      Array(n - 5)
        .fill(ones)
        .join("")
    )
  } else if (n === 9) {
    return ones.concat(tens)
  }
  return ""
}

export default RomanNumerals

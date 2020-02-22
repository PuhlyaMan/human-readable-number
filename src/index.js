const zeroToNineteen = {
    0: "",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
};

const tens = {
    0: "",
    1: "ten",
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
};

module.exports = function toReadable(number) {
    if (number === 0) return "zero";

    function oneToNinetyNine(num) {
        if (number === 0) return "";
        if (num >= 1 && num <= 19) {
            return zeroToNineteen[num];
        } else if (num >= 20 && num <= 99) {
            return `${tens[Math.floor(num / 10)]} ${
                zeroToNineteen[num % 10]
            }`.trim();
        }
    }

    if (number >= 1 && number <= 99) {
        return oneToNinetyNine(number);
    } else {
        const hundred = `${zeroToNineteen[Math.floor(number / 100)]} hundred`;
        return number % 100 === 0 ? hundred : `${hundred} ${oneToNinetyNine(number % 100)}`;
    }
};

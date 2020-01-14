class Coolculator {
    add(a, b) {
        return a + b
    }

    multiply(a, b) {
        return a * b;
    }

    subtract(a, b) {
        return a - b;
    }

    divide(a, b) {
        return a / b;
    }

    highest(a, b) {
        if (a > b) {
            return a;
        }
        return b;
    }

    lowest(a, b) {
        if (a < b) {
            return a;
        }
        return b;
    }

    double(a) {
        return a * 2;
    }

    square(a) {
        return a * a * a;
    }

    raise(a, b) {
        return Math.pow(a, b);
    }

    isNegative(a) {
        return a < 0
    }

    isPositive(a) {
        return a > 0
    }

    isCool(a) {
      var firstDigit = parseInt((''+a)[0]);
      var lastDigit = a % 10;

      return firstDigit === lastDigit;
    }
}

module.exports = Coolculator

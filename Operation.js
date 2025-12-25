class Operation {
  constructor(numberA, operator, numberB) {
    this.numberA = this.normalizeNumber(numberA);
    this.operator = operator;
    this.numberB = this.normalizeNumber(numberB);

    if (isNaN(this.numberA) || isNaN(this.numberB)) {
      throw new Error("Invalid numbers provided.");
    }
  }

  /**
   * Normalizes the input number.
   * Returns the number if it is of type 'number', parses strings with various decimal/thousand separators,
   * and returns NaN for unsupported types such as objects, arrays, or other non-numeric values.
   * @param {*} number - The value to normalize.
   * @returns {number} - The normalized number or NaN for unsupported types (e.g., objects, arrays).
   */
  normalizeNumber(number) {
    switch (typeof number) {
      case "number":
        return number;
      case "string":
        // Remove spaces from the input, detect if the user used the comma or the dot as decimal separator, detect the thousands separator in both systems, and parse accordingly
        number = number.trim();

        if (number.includes(",") && number.includes(".")) {
          if (number.lastIndexOf(",") > number.lastIndexOf(".")) {
            // Comma is decimal separator, dot is thousands separator
            number = number.replace(/\./g, "").replace(/,/g, ".");
          } else {
            // Dot is decimal separator, comma is thousands separator
            number = number.replace(/,/g, "");
          }
        } else {
          if (number.includes(",")) {
            // Comma is decimal separator
            number = number.replace(/,/g, ".");
          } else if (number.includes(".")) {
            // Dot is decimal separator, no thousands separator to handle
          } else {
            // No decimal separator, just parse as is
          }
        }

        return number;

      default:
        return NaN;
    }
  }
}

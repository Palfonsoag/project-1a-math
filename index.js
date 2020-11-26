module.exports = {
  /**
   * Addition of two numbers
   *  @example
   * n1 = 1 , n2 = 3 => result 4
   * @param {*} n1 first number of the addition
   * @param {*} n2 second number of the addition
   */
  add: function (n1, n2) {
    return this.inNumber(n1, n2) ? n1 + n2 : this.errorMessage();
  },

  /**
   * subtraction of two numbers
   *  @example
   * n1 = 1 , n2 = 3 => result -2
   * @param {*} n1 first number of the subtraction
   * @param {*} n2 second number of the subtraction
   */
  sub: function (n1, n2) {
    return this.inNumber(n1, n2) ? n1 - n2 : this.errorMessage();
  },

  /**
   * Multiplication of two numbers
   *  @example
   * n1 = 1 , n2 = 3 => result 3
   * @param {*} n1 first number of the multiplication
   * @param {*} n2 second number of the multiplication
   */
  mul: function (n1, n2) {
    return this.inNumber(n1, n2) ? n1 * n2 : this.errorMessage();
  },

  /**
   * Division of two numbers
   *  @example
   * n1 = 1 , n2 = 3 => result 0.33
   * @param {*} n1 first number of the division
   * @param {*} n2 second number of the division
   */
  div: function (n1, n2) {
    return this.inNumber(n1, n2) ? n1 / n2 : this.errorMessage();
  },
  /**
   * ERROR MESSAGE that is print on console when one o both of the values are not a number
   */
  errorMessage: function () {
    console.log("one or both values are not a number");
  },
  /**
   * Type validation of the values
   * @param {*} n1
   * @param {*} n2
   */
  inNumber: function (n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
      return false;
    }
    return true;
  },
};

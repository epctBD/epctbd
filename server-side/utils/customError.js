class customError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, customError.prototype);
  }

  serialize() {
    throw new Error("Method 'serialize' must be implemented.");
  }
}

module.exports = { customError };

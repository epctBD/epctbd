const { customError } = require("./customError");

class apiError extends customError {
  constructor(message, statusCode) {
    super(message, statusCode);
    this.statusCode = statusCode;
    this.message = message;
    // Set the prototype explicitly for proper instanceof checks.
    Object.setPrototypeOf(this, ApiError.prototype);
  }

  serialize() {
    if (process.env.NODE_ENV === "development") {
      return [{ message: this.message, field: this.stack }];
    }
    return [{ message: this.message }];
  }
}

module.exports = { apiError };

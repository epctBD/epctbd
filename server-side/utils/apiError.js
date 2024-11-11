const { customError } = require("./customError");

class apiError extends customError {
  constructor(statusCode, message) {
    super(statusCode, message);
    this.statusCode = statusCode;
    this.message = message;
    // Set the prototype explicitly for proper instanceof checks.
    Object.setPrototypeOf(this, apiError.prototype);
  }

  serialize() {
    if (process.env.NODE_ENV === "development") {
      return [{ message: this.message, field: this.stack }];
    }
    console.log("in the api error");
    return [{ message: this.message }];
  }
}

module.exports = { apiError };

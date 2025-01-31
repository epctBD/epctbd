const statusCodes = {
  SUCCESSFUL: {
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    DELETED: 204,
    ALREADY: 209,
  },
  CLIENT_ERROR: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 402,
    NOT_FOUND: 404,
    CONFLICT: 409,
    TOO_MANY_REQUESTS: 429,
  },
  SERVER_ERROR: {
    INTERNAL_SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
  },
};

module.exports = {
  statusCodes,
};

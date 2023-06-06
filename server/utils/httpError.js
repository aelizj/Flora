class HttpError extends Error {
  constructor(message, errorCode, details = null) {
    super(message);
    this.status = errorCode || 500;
    this.details = details; // For adding additional details about the error
    Error.captureStackTrace(this, this.constructor); // Creates a .stack property
  }
}

export default HttpError;

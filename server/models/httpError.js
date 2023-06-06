class HttpError extends Error {
  constructor(error, errorCode) {
    super(error);
    this.code = errorCode;
  }
}

export default HttpError;

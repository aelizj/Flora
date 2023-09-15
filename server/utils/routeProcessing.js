const RouteProcessingStart = (method, path) => {
  console.log(`\nROUTE_PROCESSING_START: ${method} ${path}`);
};

const RouteProcessingSuccess = (method, path, res) => {
  console.log(`ROUTE_PROCESSING_SUCCESS: ${method} ${path}`);
  return res;
};

const RouteProcessingFailure = (method, path, error) => {
  console.log(`ROUTE_PROCESSING_FAILURE: ${method} ${path}; ERROR: ${error}`);
};

export { RouteProcessingStart, RouteProcessingSuccess, RouteProcessingFailure };

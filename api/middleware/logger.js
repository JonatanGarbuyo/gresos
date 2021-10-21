const logger = (request, response, next) => {
  console.log("--- logger ---");
  console.log("Method: ", request.method);
  console.log("Path: ", request.path);
  console.log("Body: ", request.body);
  console.log("--- logger end ---");
  next();
};

export default logger;

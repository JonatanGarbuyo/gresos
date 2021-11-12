import jwt from "jsonwebtoken";

export default function userExtractor(req, res, next) {
  const authorization = req.get("x-auth-token");
  console.log("authorization: ", authorization); ////////////////
  let token = "";

  if (authorization && authorization.startsWith("bearer")) {
    token = authorization.split(" ")[1];
    console.log("token: ", token); ///////////////////////
  }

  const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  console.log("decodedToken: ", decodedToken); ///////////////////////

  if (!token || !decodedToken.user_id) {
    return res.status(401).send({ error: "token missing or invalid" });
  }

  const { user_id } = decodedToken;
  req.user_id = user_id;

  next();
}

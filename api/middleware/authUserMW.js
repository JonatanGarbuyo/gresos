import jwt from "jsonwebtoken";

export default function AuthUserMW(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) return res.status(401).send("Access denied. No token provided");

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decodedToken;
    next();
  } catch (ex) {
    res.status(400).send("Invalid Token");
  }
}

import jwt from "jsonwebtoken";

const config = process.env;

const verifyUser = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(403).send("A token is required");
  }
  const clean_token = authorization.split(" ")[1];
  try {
    const decoded = jwt.verify(clean_token, config.USER_TOKEN_KEY);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyUser;

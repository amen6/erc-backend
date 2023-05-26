import jwt from "jsonwebtoken";

const config = process.env;

const verifySuperAdmin = (req, res, next) => {
  console.log(req, 33333333);
  console.log(req.user);
  return next();
};

export default verifySuperAdmin;

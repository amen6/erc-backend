const verifyAdmin = (req, res, next) => {
  const { user } = req;
  if (!user.is_super_paramedic) {
    return res.status(401).send("Unauthorized");
  }
  return next();
};

export default verifyAdmin;

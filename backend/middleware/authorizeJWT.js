const authorizeJWT = (...allowPermission) => {
  return (req, res, next) => {
    if (!req?.permission) return res.status(401).send("Unauthorized.");
    const permissionArr = [...allowPermission];
    const myPermission = req.permission;

    const isAuthorize = permissionArr.every((p) => myPermission.includes(p));

    if (!isAuthorize) return res.status(401).send("Unauthorized.");
    next();
  };
};

export default authorizeJWT;

import jwt from "jsonwebtoken";

export default async function Auth(req, res, next) {
  const token = req.body.token;
  token;
  try {
    const user = await jwt.verify(token, "secret");
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
}
export function localVariables(req, res, next) {
  req.app.locals = {
    OTP: null,
    resetSession: false,
  };
  next();
}

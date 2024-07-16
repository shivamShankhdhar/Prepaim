import jsonwebtoken from "jsonwebtoken";
import User from "../../models/user/user.model.js";

export const Login = async (req, res) => {
  try {
    const { username } = req.params;
    const { password } = req.params;
    const isAdmin = true;
    const isExists = await User.findOne({ username, password, isAdmin });
    // (isExists);
    if (isExists !== null) {
      // if password, create jwt token
      const token = jsonwebtoken.sign(
        {
          username: isExists.username,
        },
        "secret",
        { expiresIn: "2h" }
      );
      return res
        .status(200)
        .send({ msg: "user found", token, isAdmin: isExists.isAdmin });
    } else {
      return res.status(401).send({ error: "user not found" });
    }
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
};

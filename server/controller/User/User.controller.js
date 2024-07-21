import jsonwebtoken from "jsonwebtoken";
import User from "../../models/user/user.model.js";

export const Login = async (req, res) => {
  try {
    const { userEmail } = req.body.data;
    const { password } = req.body.data;
    console.log(`login details`, userEmail, password);
    // const isAdmin = true;
    const isExists = await User.findOne({ email: userEmail, password });
    console.log(isExists);
    // (isExists);
    // if (isExists !== null) {
    //   // if password, create jwt token
    //   const token = jsonwebtoken.sign(
    //     {
    //       username: isExists.username,
    //     },
    //     "secret",
    //     { expiresIn: "2h" }
    //   );
    //   return res.status(200).send({
    //     msg: "user found",
    //     token,
    //     // isAdmin: isExists.isAdmin,
    //     user_id: isExists._id || "",
    //     user_profile_image: isExists.user_profile_image || "",
    //     full_name:
    //       `${isExists.first_name} ${isExists.last_name}` || "anonymous",
    //     // user_email: isExists.email,
    //   });
    // } else {
    //   return res.status(401).send({ error: "user not found" });
    // }
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
};

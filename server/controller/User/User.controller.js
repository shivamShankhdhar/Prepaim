import jsonwebtoken from "jsonwebtoken";
import User from "../../models/user/user.model.js";
import bcrypt from "bcrypt";

export const Login = async (req, res) => {
  // res.headers("Access-Control-Allow-Origin", "*");
  try {
    const { email, password } = req.body.data;

    console.log(`${email} ${password}`);
    const isExists = await User.findOne({ email: email });
    console.log(`${isExists}`);
    if (isExists !== null) {
      const isPasswordMatched = await bcrypt.compare(
        password,
        isExists.password
      );
      if (isPasswordMatched) {
        const token = jsonwebtoken.sign(
          {
            email: user_email_with_password.email,
          },
          "secret",
          { expiresIn: "2h" }
        );
        return res.status(200).send({
          message: "Logged in successfully",
          token,
          // isAdmin: isExists.isAdmin,
          user_id: isExists._id || "",
          user_profile_image: isExists.user_profile_image || "",
          first_name: `${isExists.first_name}`,
          last_name: `${isExists.last_name}`,
          // user_email: isExists.email,
        });
      } else {
        return res.status(401).send({ error: "Wrong Password..." });
      }
      // if password, create jwt token
    } else {
      return res
        .status(404)
        .send({ error: "user not found with this email..." });
    }
  } catch (error) {
    return res.status(501).send({ error: "something went wrong..." });
  }
};

export const registerUser = async (req, res) => {
  // res.headers("Access-Control-Allow-Origin", "*");
  try {
    const { email, first_name, last_name, password, user_profile_image } =
      req.body.data;

    console.log(req.body.data);

    const isExists = await User.findOne({ email });
    console.log(isExists);

    if (isExists !== null) {
      return res
        .status(401)
        .send({ error: "User already exists with this email" });
    } else {
      // first check password for empty and then hash it
      if (password !== "") {
        await bcrypt.hash(password, 10).then(async (hashedPassword) => {
          const user = new User({
            email,
            first_name,
            last_name,
            password: hashedPassword,
            user_profile_image: user_profile_image || "",
          });
          await user
            .save()
            .then((data) => {
              // user crated then login the user
              // --first find that user with the email

              const token = jsonwebtoken.sign(
                {
                  email: data.email,
                },
                "secret",
                { expiresIn: "2h" }
              );

              return res.status(201).send({
                message: "Successfully registered and logged in too...",
                token,
                data,
              });
            })
            .catch((error) => {
              return res.status(501).send({ error: error.message });
            });
        });
      } else {
        return res.status(404).send({ error: "password can't be empty" });
      }
    }
  } catch (err) {
    return res.status(501).send({ error: err.message });
  }
};

import jsonwebtoken from "jsonwebtoken";
import User from "../../models/user/user.model.js";
import bcrypt from "bcrypt";

export const Login = async (req, res) => {
  res.headers("Access-Control-Allow-Origin", "*");
  try {
    const { userEmail } = req.body.data;
    const { userPassword } = req.body.data;

    if (userPassword !== "") {
      bcrpypt.compare(password, userPassword).then((result) => {
        if (result) {
          const isExists = User.findOne({
            email: userEmail,
            password: userPassword,
          });
          console.log(isExists);

          if (isExists !== null) {
            // if password, create jwt token
            const token = jsonwebtoken.sign(
              {
                userEmail: isExists.email,
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
              full_name:
                `${isExists.first_name} ${isExists.last_name}` || "anonymous",
              // user_email: isExists.email,
            });
          } else {
            return res.status(401).send({ error: "user not found" });
          }
        } else {
          return res.status(401).send({ error: "password doesn't match" });
        }
        // const isAdmin = true;
      });
    }
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
};

export const registerUser = async (req, res) => {
  res.headers("Access-Control-Allow-Origin", "*");
  try {
    const { first_name, last_name, email, password, user_profile_image } =
      req.body.data;

    console.log(req.body.data);

    const isExists = User.findOne({ email });
    console.log(isExists);

    if (isExists !== null) {
      return res.status(404).send({ error: "user already exists" });
    } else {
      // first check password for empty and then hash it
      if (password !== "") {
        bcrypt.hash(password, 10).then((hashedPassword) => {
          const user = new User({
            email,
            first_name: first_name,
            last_name: last_name,
            password: hashedPassword,
            user_profile_image: user_profile_image || "",
          });
          user
            .save()
            .then((data) => {
              // user crated then login the user
              // --first find that user with the email

              const token = jsonwebtoken.sign(
                {
                  userEmail: data.email,
                },
                "secret",
                { expiresIn: "2h" }
              );

              return res.status(201).json({
                message: "Successfully registered",
                token,
                data: data,
              });
            })
            .catch((error) => {
              return res.status(501).send({ error: error.message });
            });
        });
      } else {
        return res.status(401).send({ error: "password can't be empty" });
      }
    }
  } catch (error) {
    return res.status(501).send({ error: error.message });
  }
};

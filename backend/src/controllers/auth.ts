import dbClient from "../databaseClient";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

function createToken(user: any) {
  const token = Jwt.sign(
    { id: user.id, username: user.username, email: user.email },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "10h",
    }
  );
  return token;
}

export const Signup = async (req: any, res: any) => {
  try {
    const { password, confirmpassword, username, email, country, state, city } =
      req.body;

    if (password !== confirmpassword)
      return res
        .status(400)
        .send({ status: false, message: "Password mis-matched" });
    else {
      const existingUserByEmail = await dbClient.user.findUnique({
        where: { Email: email },
      });

      const existingUserByUsername = await dbClient.user.findUnique({
        where: { Username: username },
      });

      if (existingUserByEmail) {
        return res.status(409).send({
          status: false,
          message: "User with this email already exists",
          data: null,
        });
      }

      if (existingUserByUsername) {
        return res.status(409).send({
          status: false,
          message: "User with this username already exists",
          data: null,
        });
      }

      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = await dbClient.user.create({
        data: {
          Username: username,
          Email: email,
          CountryID: country,
          StateID: state,
          CityID: city,
          Password: passwordHash,
        },
      });

      const data = {
        user: newUser,
        token: createToken(newUser),
      };

      return res
        .status(201)
        .json({ status: true, message: "User created successfully", data });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error", data: err });
  }
};

export const Signin = async (req: any, res: any) => {
  try {
    const { password, email } = req.body;

    const existingUser = await dbClient.user.findUnique({
      where: { Email: email },
    });

    if (existingUser) {
      const isValid = await bcrypt.compare(password, existingUser.Password);

      if (isValid) {
        return res.status(200).send({
          status: "Success",
          message: "User signin successful",
          data: {
            user: existingUser,
            token: createToken(existingUser),
          },
        });
      } else {
        return res.status(404).send({
          status: "Failed",
          message:
            "Your password is wrong. Please enter the correct credentials.",
          data: null,
        });
      }
    }

    return res.status(404).send({
      status: "Failed",
      message: "Your email is wrong. Please enter the correct credentials.",
      data: null,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error", data: err });
  }
};

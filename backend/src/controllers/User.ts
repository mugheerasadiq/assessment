import dbClient from "../databaseClient";

export const UpdateUser = async (req: any, res: any) => {
  const { username, email, country, state, city } = req.body;

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

  const newUser = await dbClient.user.update({
    where: {
      Email: email,
    },
    data: {
      Username: username,
      Email: email,
      CountryID: country,
      StateID: state,
      CityID: city,
    },
  });

  return res
    .status(200)
    .json({
      status: "SUCCESS",
      message: "User updated successfully",
      data: { user: newUser },
    });
};

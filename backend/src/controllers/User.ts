import dbClient from "../databaseClient";

export const UpdateUser = async (req: any, res: any) => {
  try {
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

    return res.status(200).json({
      status: "SUCCESS",
      message: "User updated successfully",
      data: { user: newUser },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error", data: err });
  }
};

export const DeleteUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const existingUser = await dbClient.user.findUnique({
      where: { ID: id },
    });

    if (!existingUser) {
      return res.status(404).send({
        status: "FAILED",
        message: "User does not exists.",
        data: null,
      });
    }

    await dbClient.user.delete({
      where: {
        ID: id,
      },
    });

    return res.status(200).json({
        status: "SUCCESS",
        message: "User deleted successfully",
        data: null,
      });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error", data: err });
  }
};

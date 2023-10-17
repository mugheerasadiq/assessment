import dbClient from "../databaseClient";

export const updateUser = async (req: any, res: any) => {
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

export const deleteUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const existingUser = await dbClient.user.findUnique({
      where: { ID: parseInt(id) },
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
        ID: parseInt(id),
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

export const getAllUsers = async (req: any, res: any) => {
  try {
    const { skip, limit, sortField, sortOrder, city, country, state } =
      req.query;

    const queryOptions: {
      skip?: number;
      take?: number;
      orderBy?: { [key: string]: "asc" | "desc" };
      where?: { [key: string]: any };
      include?: {
        Country: boolean;
        City: boolean;
        State: boolean;
      };
    } = {};

    queryOptions.where = {};

    if (state) {
      queryOptions.where = { StateID: parseInt(state) };
    }

    if (country) {
      queryOptions.where = {
        ...queryOptions.where,
        CountryID: parseInt(country),
      };
    }

    if (city) {
      queryOptions.where = { ...queryOptions.where, CityID: parseInt(city) };
    }

    if (sortField && sortOrder) {
      queryOptions.orderBy = { [sortField]: sortOrder };
    }

    if (skip) {
      queryOptions.skip = parseInt(skip);
    }
    if (limit) {
      queryOptions.take = parseInt(limit);
    }

    queryOptions.include = { City: true, Country: true, State: true };

    const users = await dbClient.user.findMany(queryOptions);

    const totalCount = await dbClient.user.count({
      where: queryOptions.where,
    });

    const data = {
      users,
      totalCount,
    };

    return res.status(200).json({
      status: "SUCCESS",
      message: "User fetched successfully",
      data,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error", data: err });
  }
};

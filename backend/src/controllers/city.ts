import dbClient from "../databaseClient";

export const getCities = async (req: any, res: any) => {
  try {
    const { countryID, stateID } = req.query;

    let whereClause: any = {};

    if (countryID) whereClause.CountryID = parseInt(countryID);

    if (stateID) whereClause.StateID = parseInt(stateID);

    console.log(whereClause)

    const cities = await dbClient.city.findMany({
      where: whereClause
    });

    const data = { cities };

    return res
      .status(200)
      .json({ status: true, message: "Cities fetched successfully", data });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error", data: err });
  }
};

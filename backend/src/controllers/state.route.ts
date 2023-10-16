import dbClient from "../databaseClient";

export const getStates = async (req: any, res: any) => {
  try {
    const { countryID } = req.query;
    let whereClause = {};

    if (countryID)
      whereClause = {
        CountryID: parseInt(countryID),
      };

    const states = await dbClient.state.findMany({
      where: whereClause,
    });

    const data = { states };

    return res
      .status(200)
      .json({ status: true, message: "States fetched successfully", data });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error", data: err });
  }
};

import dbClient from "../databaseClient";

export const getCities = async (req: any, res: any) => {
  try {
    const { countryID, stateID } = req.query;

    const cities = await dbClient.city.findMany({
      where: {
        CountryID: countryID ?? null,
        StateID: stateID ?? null
      },
    });

    const data = { cities };

    return res
      .status(200)
      .json({ status: true, message: "States fetched successfully", data });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error", data: err });
  }
};

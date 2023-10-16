import dbClient from "../databaseClient";

export const getStates = async (req: any, res: any) => {
  try {
    const { countryID } = req.query;

    const states = await dbClient.state.findMany({
      where: {
        CountryID: countryID ?? null,
      },
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

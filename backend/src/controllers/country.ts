import dbClient from "../databaseClient";

export const getCountries = async (req: any, res: any) => {
  try {
    const countries = await dbClient.country.findMany({});
    return res
      .status(200)
      .json({ status: true, message: "Countries fetched successfully", countries });
  } catch (err) {
    return res
      .status(500)
      .json({ status: false, message: "Internal Server Error", data: err });
  }
};
import submitCourseRating from "@utils/submitCourseRating";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  try {
    if (method === "GET") {
      return res.status(200).json({});
    } else if (method === "POST") {
      const data = await submitCourseRating(req.body.user, req.body.course, req.body.ratingType, req.body.rating);
      return res.status(201).json(data);
    } else {
      return res.status(404).json("Method unsupported");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default handler;

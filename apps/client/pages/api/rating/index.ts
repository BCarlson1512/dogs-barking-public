import getRating from "@utils/getRating";
import submitCourseRating from "@utils/submitCourseRating";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  try {
    if (method === "GET") {
      return res.status(200).json({});
    } else if (method === "POST") {
      await submitCourseRating(req.body.userId, req.body.courseNodeId, req.body.ratingType, req.body.rating);
      return res.status(201).json(await getRating(req.body.courseNodeId));
    } else {
      return res.status(404).json("Method unsupported");
    }
  } catch (error) {
    return res.status(400).json(error);
  }
};

export default handler;

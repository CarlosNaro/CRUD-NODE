import { Request, Response } from "express";

export const getProducts = (req: Request, res: Response) => {
  res.json({
    message: "Get Products",
  });
}
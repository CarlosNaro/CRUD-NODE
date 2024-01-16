import { Request, Response } from "express";

export const newUser = (req: Request, res: Response) => {
  
    const { body } = req;

  res.json({
    message: "Create User",
    body
  });
};

export const LoginUser = (req: Request, res: Response) => {
    
    const { body } = req;
    
    res.json({
        message: "Login User",
        body
    });
    };

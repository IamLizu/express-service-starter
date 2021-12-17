import { Request, Response } from "express";

const greet = (_: Request, res: Response) => {
  return res.send("Hello World!");
};

export default { greet };

import { Request, Response } from "express";
import defaultController from "../default.controller";

describe("default controller", () => {
  test("greet() should greet Hello World", () => {
    const req = {} as Request;
    const res = {} as Response;
    res.send = jest.fn().mockReturnValue(res);

    defaultController.greet(req, res);

    expect(res.send).toHaveBeenCalledWith("Hello World!");
  });
});

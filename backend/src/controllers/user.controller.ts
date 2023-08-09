import { NextFunction, Response } from 'express';
import { createUser } from '../models/user/user.model';
import { RequestEnumType } from '../const';
import { ExtendedRequest } from '../interfaces/user.inteface';

export const registerUserHandler = async (
  req: ExtendedRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name } = req.body;

    const user = await createUser({ name });

    if (user) {
      req.io?.emit('u-item', user);
    }

    res.status(201).json({
      status: RequestEnumType.SUCCESS,
      data: user,
    });
  } catch (err) {
    next(err);
  }
};


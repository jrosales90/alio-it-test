import { Request, Response, NextFunction } from 'express';
import { AnyZodObject, ZodError } from 'zod';
import { RequestEnumType } from '../const';

export const validate =
  (schema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
      try {
        schema.parse({
          params: req.params,
          query: req.query,
          body: req.body,
        });

        next();
      } catch (error) {
        if (error instanceof ZodError) {
          return res.status(400).json({
            status: RequestEnumType.FAIL,
            errors: error.errors,
          });
        }
        next(error);
      }
    }


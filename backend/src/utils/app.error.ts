import { RequestEnumType } from "../const";

export default class AppError extends Error {

  status: string;
  isOperational: boolean;

  constructor(public statusCode: number = 500, public message: string) {
    super(message);
    this.status = `${statusCode}`.startsWith('4') ? RequestEnumType.FAIL : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }

}
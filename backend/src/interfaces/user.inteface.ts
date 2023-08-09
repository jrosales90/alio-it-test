import { Request } from 'express';
import { Server } from 'socket.io';

export interface UserIntarface {
  name: string;
}

export interface ExtendedRequest extends Request {
  io?: Server;
}
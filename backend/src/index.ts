import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import AppError from './utils/app.error';
import userRouter from './routes/user.routes';
import http from 'http';
import { Server } from 'socket.io';
import { ExtendedRequest } from './interfaces/user.inteface';

const port = 8080;
const app = express();

app.use(express.json({ limit: '10kb' }));
app.use(morgan('dev'));
app.use(cors({ origin: '*', credentials: true }))

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log('a user connected :)');

  socket.on('disconnect', () => {
    console.log('user disconnected :(');
  });
});

app.use((req: ExtendedRequest, res: Response, next: NextFunction) => {
  req.io = io;
  next();
})

// ROUTES
app.use('/api/users', userRouter);

// UNHANDLED ROUTE
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(404, `Route ${req.originalUrl} not found`));
});

// global error
app.use(
  (error: AppError, req: Request, res: Response) => {
    error.status = error.status || 'error';
    error.statusCode = error.statusCode || 500;

    res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  }
);


server.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${port}`);
});

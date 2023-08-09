import { io } from 'socket.io-client';

const socket = io('http://localhost:8080'); // Reemplaza con tu URL del servidor

export default socket;
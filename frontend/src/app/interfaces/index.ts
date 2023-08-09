import { CharacterStatusType } from "../types";

export interface CharacterRequestInterface {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  },
  results: CharacterInterface[]
}

export interface CharacterInterface {
  id: number;
  name: string;
  status: CharacterStatusType;
  image: string;
}

export interface CharacterQueryParams {
  name?: string;
}

export interface ErrorRequestInterface {
  status?: number;
  data?: {
    error: string;
  };
}

export interface CreateUserInterface {
  status: string;
  data: UserIntarface;
}

export interface UserIntarface {
  id: string;
  name: string;
}
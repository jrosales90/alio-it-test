import { UserIntarface } from "../../interfaces/user.inteface";
import db from "../../modules/db";

export const createUser = async (input: UserIntarface) => {
  const user = await db.user.create({
    data: input
  });

  return user;
}
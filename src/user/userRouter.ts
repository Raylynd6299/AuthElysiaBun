import { Elysia, t } from "elysia";
import { createUserController, loginController } from "../server/dependencies";
import { createUserDTO, loginUserDTO } from "./domain/userDTO";

export const userRouter = new Elysia( { prefix: "/users" } )
    .post( "/login", loginController.run.bind( loginController ), loginUserDTO )
    .post( "/", createUserController.run.bind( createUserController ), createUserDTO );
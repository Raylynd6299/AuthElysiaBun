import { UserRepository } from "../user/infrastructure/UserRepository";
import { CreateUser } from "../user/application/create";
import { CreateUserController } from "../user/infrastructure/controllers/createController";
import { Hash } from "../services/hash";
import { LoginUser } from "../user/application/login";
import { LoginController } from "../user/infrastructure/controllers/loginController";
import { JWT } from "../services/jwt";

// Services
const hash = new Hash();
const jwt = new JWT();

// User
const userRepository = new UserRepository();

const createUser = new CreateUser( userRepository, hash );
export const createUserController = new CreateUserController( createUser );

const loginUser = new LoginUser( userRepository, hash, jwt );
export const loginController = new LoginController( loginUser );
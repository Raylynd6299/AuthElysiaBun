import { LoginUser } from "../../application/login";

export class LoginController {

    constructor(
        private loginUser: LoginUser
    ) { }

    async run ( { body }: any ) {
        try {
            const user = await this.loginUser.run( body.email, body.password );
            return {
                code: 200,
                message: 'User logged in',
                user: user
            };
        } catch ( e ) {
            const error = e as Error;
            return {
                status: 400,
                message: error.message
            };
        }
    }
}
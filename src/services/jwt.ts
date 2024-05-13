import { IJWT } from "./interfaces/IJWT";
import jwt from 'jsonwebtoken';

export class JWT implements IJWT {
    async sign ( payload: string ): Promise<string> {
        return jwt.sign( { data: payload }, process.env.JWT_SECRET || "secret" as string, { expiresIn: '1h' } );
    }

    verify ( token: string ): string {
        return jwt.verify( token, process.env.JWT_SECRET || "secret" as string ) as string;
    }
}
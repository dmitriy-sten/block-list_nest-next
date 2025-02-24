import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { PasswordService } from './password.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private passwortService: PasswordService,
        private jwtService: JwtService
    ) { }


    async signUp(email: string, password: string) {
        const user = await this.userService.findByEmail(email)
        if (user) {
            throw new BadRequestException({ type: 'email-exists' })
        }


        const salt = this.passwortService.getSalt()
        const hash = this.passwortService.getHash(password, salt)
        const newUser = await this.userService.create(email, hash, salt)

        const accessToken = await this.jwtService.signAsync({
            id: newUser.id,
            email: newUser.email
        })

        return { accessToken }

    }

    signIn(email: string, password: string) {

    }

}

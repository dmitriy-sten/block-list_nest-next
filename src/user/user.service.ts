import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UserService {

    constructor(private db: DbService, private accountService: AccountService) { }

    findByEmail(email: string) {

        return this.db.user.findFirst({
            where: {
                email
            }
        })
    }

    async create(email: string, hash: string, salt: string) {

        const user = await this.db.user.create({
            data: { salt, hash, email }
        })

        await this.accountService.create(user.id)

        return user



    }

}

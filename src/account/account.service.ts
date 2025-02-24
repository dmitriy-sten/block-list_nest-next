import { Injectable, UseGuards } from '@nestjs/common';
import { PatchAccountDto } from './dto';

@Injectable()
export class AccountService {



    getAccount(userId: number) {

    }


    patchAccount(userId: number, patch: PatchAccountDto) {

    }
}

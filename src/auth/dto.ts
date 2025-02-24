import { ApiProperty } from "@nestjs/swagger";

export class SignUpBodyDto {
    @ApiProperty({
        example: 'test@gmail.com'
    })
    email: string

    @ApiProperty({
        example: '1234'
    })
    password: string
}


export class SignIpBodyDto {
    @ApiProperty({
        example: 'test@gmail.com'
    })
    email: string

    @ApiProperty({
        example: '1234'
    })
    password: string
}


export class GetSessionDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    email: string


    @ApiProperty()
    iat: number

    @ApiProperty()
    exp: number
}
import { IsString, IsNumber, IsOptional } from "class-validator"
export class CreateProductDto {
    @IsString()
    readonly name: string
    @IsString()
    @IsOptional()
    readonly description?: string //ส่งหรือไม่ส่งมาก็ได้
    @IsNumber()
    readonly price: number
}

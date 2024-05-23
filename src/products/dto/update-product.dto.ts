import { IsString, IsNumber, IsOptional } from "class-validator"
export class UpdateProductDto {
    @IsString()
    @IsOptional()
    readonly name?: string //ส่งหรือไม่ส่งมาก็ได้ แล้วแต่ว่าจะส่งฟิลด์ไหนมาแก้
    @IsString()
    @IsOptional()
    readonly description?: string //ส่งหรือไม่ส่งมาก็ได้ แล้วแต่ว่าจะส่งฟิลด์ไหนมาแก้
    @IsNumber()
    @IsOptional()
    readonly price?: number //ส่งหรือไม่ส่งมาก็ได้ แล้วแต่ว่าจะส่งฟิลด์ไหนมาแก้
}
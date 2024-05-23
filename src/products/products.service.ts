import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product, ProductDocument } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return createdProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productModel
    //มี 3 parameters 1)id 2)data ที่ต้องการ update คือ updateProductDto 3){ new: true } เป็นการบอกว่าหลังจาก update ให้เอาค่าใหม่หลังจาก update คืนมาด้วย
      .findByIdAndUpdate(id, updateProductDto, { new: true }) 
      .exec();
  }

  async delete(id: string): Promise<{ message: string }> {
      const result = await this.productModel.findByIdAndDelete(id).exec();
      if (!result) {
        throw new NotFoundException(`Product with ID ${id} not found`);
      }
      return { message: 'Delete Successful' };    
  }

}

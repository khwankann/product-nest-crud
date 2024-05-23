import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductsModule, 
    MongooseModule.forRoot('mongodb+srv://product:password1238@product.m6sqw1t.mongodb.net/test')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

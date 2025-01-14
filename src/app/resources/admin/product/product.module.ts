// ================================================================>> Core Library
import { Module }           from '@nestjs/common';

// ================================================================>> Costom Library
import { ProductService }      from './product.service';
import { ProductController }   from './product.controller';
import { FileService } from 'src/app/services/file.service';

@Module({
    controllers: [ProductController],
    providers: [ProductService,FileService]
})

export class ProductModule { }

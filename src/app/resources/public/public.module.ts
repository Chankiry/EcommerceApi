// ================================================================>> Core Library
import { Module }           from '@nestjs/common';

// ================================================================>> Costom Library
import { PublicService }      from './public.service';
import { PublicController }   from './public.controller';

@Module({
    controllers: [PublicController],
    providers: [PublicService]
})

export class PublicModule { }

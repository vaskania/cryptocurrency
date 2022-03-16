import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CryptoController } from './crypto.controller';
import { CryptoService } from './crypto.service';

@Module({
  imports: [HttpModule],
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { CompteBanqueController } from './compte-banque.controller';
import { CompteBanqueService } from './compte-banque.service';

@Module({
  controllers: [CompteBanqueController],
  providers: [CompteBanqueService]
})
export class CompteBanqueModule {}

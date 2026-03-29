import { Module } from '@nestjs/common';
import { DeviseModule } from './devise/devise.module';
import { BanqueModule } from './banque/banque.module';
import { CompteBanqueModule } from './compte-banque/compte-banque.module';

@Module({
  imports: [DeviseModule, BanqueModule, CompteBanqueModule]
})
export class CorrespondanceModule {}

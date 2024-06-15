import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstagramService } from './instagram/instagram.service';
import { InstagramController } from './instagram/instagram.controller';

@Module({
  imports: [HttpModule],
  controllers: [AppController, InstagramController],
  providers: [AppService, InstagramService],
})
export class AppModule {}

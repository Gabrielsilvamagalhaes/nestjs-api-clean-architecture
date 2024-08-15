import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfigModule } from './shared/infastructure/env-config/env-config.module';
@Module({
	imports: [ConfigModule, EnvConfigModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

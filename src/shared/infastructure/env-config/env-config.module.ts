import { Module } from '@nestjs/common';
import { EnvConfigService } from './env-config.service';

@Module({
	imports: [],
	controllers: [],
	providers: [EnvConfigService],
})
export class EnvConfigModule {}

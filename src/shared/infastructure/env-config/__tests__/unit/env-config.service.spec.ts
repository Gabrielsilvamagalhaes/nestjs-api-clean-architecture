import { Test, TestingModule } from '@nestjs/testing';
import { EnvConfigModule } from '../../env-config.module';
import { EnvConfigService } from '../../env-config.service';

describe('EnvConfigService unit tests', () => {
	let sut: EnvConfigService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [EnvConfigModule.forRoot()],
			providers: [EnvConfigService],
		}).compile();

		sut = module.get<EnvConfigService>(EnvConfigService);
	});

	it('should be defined', () => {
		expect(sut).toBeDefined();
	});

	it('should sut.getAppPort() be defined ', () => {
		expect(sut.getAppPort()).toBeDefined();
	});

	it('should sut.getAppPort() return number ', () => {
		expect(sut.getAppPort()).toBeTypeOf('number');
	});

	it('should sut.getNodeEnv() be defined ', () => {
		expect(sut.getNodeEnv()).toBeDefined();
	});

	it('should sut.getNodeEnv() return string', () => {
		expect(sut.getNodeEnv()).toBeTypeOf('string');
	});
});

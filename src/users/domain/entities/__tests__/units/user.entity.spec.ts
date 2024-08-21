import { faker } from '@faker-js/faker';
import { UserEntity, UserProps } from '../../user.entity';

describe('UserEntity unit tests', () => {
	let props: UserProps;
	let sut: UserEntity;
	beforeEach(() => {
		props = {
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password({ length: 8 }),
		};

		sut = new UserEntity(props);
	});

	it('Constructor method', () => {
		expect(sut.props.name).toBe(props.name);
		expect(sut.props.email).toBe(props.email);
		expect(sut.props.password).toBe(props.password);
		expect(sut.props.createdAt).toBeInstanceOf(Date);
	});

	it('Getter for name field', () => {
		expect(sut.name).toBeDefined();
		expect(sut.name).toBe(props.name);
		expect(sut.name).toBeTypeOf('string');
	});

	it('Getter for email field', () => {
		expect(sut.email).toBeDefined();
		expect(sut.email).toBe(props.email);
		expect(sut.email).toBeTypeOf('string');
	});

	it('Getter for password field', () => {
		expect(sut.password).toBeDefined();
		expect(sut.password).toBe(props.password);
		expect(sut.password).toBeTypeOf('string');
	});

	it('Getter for email field', () => {
		expect(sut.createdAt).toBeDefined();
		expect(sut.createdAt).toBe(props.createdAt);
		expect(sut.createdAt).toBeTypeOf('object');
		expect(sut.createdAt).toBeInstanceOf(Date);
	});
});

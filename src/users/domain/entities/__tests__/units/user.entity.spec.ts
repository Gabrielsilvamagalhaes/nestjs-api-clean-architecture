import { userDataBuilder } from '../../../testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';

describe('UserEntity unit tests', () => {
	let props: UserProps;
	let sut: UserEntity;

	beforeEach(() => {
		props = userDataBuilder({});
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

	it('Setter for name field', () => {
		sut['name'] = 'other name';

		expect(sut.name).toBe('other name');
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

	it('Setter for password field', () => {
		sut['password'] = '123456';

		expect(sut.password).toBe('123456');
	});

	it('Getter for createdAt field', () => {
		expect(sut.createdAt).toBeDefined();
		expect(sut.createdAt).toBe(props.createdAt);
		expect(sut.createdAt).toBeTypeOf('object');
		expect(sut.createdAt).toBeInstanceOf(Date);
	});

	it('Update method name', () => {
		sut.update('other name');

		expect(sut.name).toBe('other name');
	});

	it('Update method password', () => {
		sut.updatePassword('123456');

		expect(sut.password).toBe('123456');
	});
});

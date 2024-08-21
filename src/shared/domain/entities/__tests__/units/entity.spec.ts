import { validate as uuidValidate } from 'uuid';
import { Entity } from '../../entity';

interface StubProps {
	prop1: string;
	prop2: number;
}

class StubEntity extends Entity<StubProps> {}

const uuidGenerate = () => {
	return '207c2110-6f8c-43aa-b262-5410c6ff1d6b';
};

describe('Entity unit tests', () => {
	let props: StubProps;
	let entity: Entity;

	beforeEach(() => {
		props = {
			prop1: 'value1',
			prop2: 120,
		};
		entity = new StubEntity(props);
	});

	it('Should set props and id', () => {
		expect(entity.props).toStrictEqual(props);
		expect(entity.id).toBeDefined();
		expect(uuidValidate(entity.id)).toBeTruthy();
	});

	it('Should accept a valid uuid', () => {
		const id = uuidGenerate();
		const entity = new StubEntity(props, id);

		expect(uuidValidate(entity.id)).toBeTruthy();
		expect(entity.id).toEqual(id);
	});

	it('Should convert a entity to a javascript object', () => {
		const id = uuidGenerate();
		const entity = new StubEntity(props, id);

		expect(entity.toJSON()).toStrictEqual({
			id,
			...props,
		});
	});
});

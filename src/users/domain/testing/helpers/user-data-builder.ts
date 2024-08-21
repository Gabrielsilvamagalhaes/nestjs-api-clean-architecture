import { UserProps } from '@/users/domain/entities/user.entity';
import { faker } from '@faker-js/faker';

type Props = Partial<UserProps>;

export function userDataBuilder(props: Props): UserProps {
	return {
		name: props.name || faker.person.fullName(),
		email: props.email || faker.internet.email(),
		password: props.password || faker.internet.password({ length: 8 }),
		createdAt: props.createdAt || new Date(),
	};
}

export type FieldsErrors = Record<string, string>;

export type ValidatorFieldsInterFace<PropsValidated> = {
	errors: FieldsErrors;
	validatedData: PropsValidated;
	validate(data: unknown): boolean;
};

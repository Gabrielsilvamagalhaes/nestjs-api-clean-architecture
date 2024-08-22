export type FieldsErrors = Record<string, string[]>;

export interface ValidatorFieldsInterFace<PropsValidated> {
	errors: FieldsErrors;
	validatedData: PropsValidated;
	validate(data: any): boolean;
}

export type RemovePrivateProperties<T> = {
	[K in keyof T as K extends `_${infer _}` ? never : K]: T[K];
};

export type RemovePublicProperties<T> = {
	[K in keyof T as K extends `_${infer _}` ? K : never]: T[K];
};

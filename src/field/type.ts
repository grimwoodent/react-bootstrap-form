export enum FIELD_TYPE {
    STRING = 'string',
    NUMBER = 'number',
    BOOLEAN = 'boolean',
    ARRAY = 'array',
    OBJECT = 'object',
}

export type TFieldType = FIELD_TYPE | string;

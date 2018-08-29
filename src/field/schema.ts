import { TFieldType } from './type';

interface ISchemaProps {
    type?: TFieldType;
    error?: string;
}

export interface ISchema {
    getType(): TFieldType;
    getError(): string;
    setError(message: string): void;
}

export class Schema implements ISchema {
    protected type: TFieldType;

    protected error: string;

    constructor(props: ISchemaProps) {
        const {
            type,
            error,
        } = props;

        this.type = type;
        this.error = error;
    }

    public getType(): TFieldType {
        return this.type;
    }

    // region error
    public getError(): string {
        return this.error;
    }

    public setError(message: string): void {
        this.error = message;
    }
    // endregion
}

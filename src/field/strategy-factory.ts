import { FieldStrategy, IFieldStrategy, IFieldStrategyProps } from './strategy';

export class StrategyFactory {
    public create(props: IFieldStrategyProps): IFieldStrategy {
        return new FieldStrategy(props);
    }
}

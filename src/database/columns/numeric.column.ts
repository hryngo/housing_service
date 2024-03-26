import { Column } from 'typeorm';
import { ColumnCommonOptions } from 'typeorm/decorator/options/ColumnCommonOptions';
import { ColumnNumericOptions } from 'typeorm/decorator/options/ColumnNumericOptions';

import { ColumnNumericTransformer } from './numeric-transformer.option';

export function Numeric(
  options?: ColumnCommonOptions & ColumnNumericOptions,
): PropertyDecorator {
  options.transformer = new ColumnNumericTransformer();
  return Column('numeric', options);
}

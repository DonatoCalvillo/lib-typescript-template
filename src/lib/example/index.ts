import { PositiveNumberValueObject } from "../object-values/positive-number-value-object";

export class Example extends PositiveNumberValueObject {
  constructor(value: number) {
    super(value, 'Example');
  }
}
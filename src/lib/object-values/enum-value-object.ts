export abstract class EnumValueObject<T> {
  public readonly value: T;
  private readonly validValues: T[];
  private readonly name: string;

  constructor(
    value: T, 
    validValues: T[], 
    name: string
  ) {
    this.value = value;
    this.validValues = validValues;
    this.name = name;
    this.checkValueIsValid();
  }

  private checkValueIsValid(): void {
    if (!this.validValues.includes(this.value))
      throw new Error(`The value ${this.value} in ${this.name} is invalid. Valid values are: ${this.validValues.join(', ')}`);
  }
}
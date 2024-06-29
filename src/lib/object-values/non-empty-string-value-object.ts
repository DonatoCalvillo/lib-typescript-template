export abstract class NonEmptyStringValueObject {
  public readonly value: string;
  private readonly name: string;

  constructor(value: string, name: string) {
    this.value = value.trim();
    this.name = name;
    this.validate(value);
  }

  private validate(value: string): void {
    if (typeof value !== 'string') 
      throw new Error(`${this.name} must be a string`);
    if (value.trim() === '') 
      throw new Error(`${this.name} must not be empty`);
  }
}
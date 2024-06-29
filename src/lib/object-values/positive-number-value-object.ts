export abstract class PositiveNumberValueObject {
  public readonly value: number;
  private readonly name: string;
  
  constructor(value: number, name: string) {
    this.value = value;
    this.name = name;
    this.validate(value);
  }

  private validate(value: number): void {
    if (typeof value !== 'number') 
      throw new Error(`${this.name} must be a number`);
    if (value <= 0) 
      throw new Error(`${this.name} must be positive`);
  }
}
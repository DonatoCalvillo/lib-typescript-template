export enum DateFormat {
  YYYY_MM_DD_HH_MM_SS = 'yyyy-MM-dd HH:mm:ss',
  YYYY_MM_DD_HH_MM = 'yyyy-MM-dd HH:mm',
  YYYY_MM_DD = 'yyyy-MM-dd',
  DD_MM_YYYY = 'dd-MM-yyyy'
}

export abstract class DateValueObject {
  public readonly value: Date;
  private readonly name: string;

  constructor(value: Date, name: string) {
    this.value = value;
    this.name = name;
    this.validate(value);
  }

  private validate(value: Date): void {
    if (!(value instanceof Date)) 
      throw new Error(`${this.name} must be a Date`);
  }

  public toString(format: DateFormat = DateFormat.YYYY_MM_DD_HH_MM_SS): string {
    return this.formatDate(this.value, format);
  }

  private formatDate(date: Date, format: string): string {
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return format
      .replace('yyyy', year)
      .replace('MM', month)
      .replace('dd', day)
      .replace('HH', hours)
      .replace('mm', minutes)
      .replace('ss', seconds);
  }
}
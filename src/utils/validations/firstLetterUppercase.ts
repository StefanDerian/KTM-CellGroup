import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    isUppercase,
  } from 'class-validator';


@ValidatorConstraint({ async: true })
export class IsFirstLetterUppercaseConstraint implements ValidatorConstraintInterface {
  validate(word: string) {
    return isUppercase(word?.charAt(0))
  }
  defaultMessage(validationArguments?: ValidationArguments): string {
      return 'first letter need to be capital'
  }
}

export function isFirstLetterUppercase(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsFirstLetterUppercaseConstraint,
    });
  };
}
import { AbstractControl } from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstNumber = form.value[sourceOne];
      const secondeNumber = form.value[sourceTwo];
      if (firstNumber + secondeNumber === parseInt(sum)) return null;

      return { addition: true };
    };
  }
}

import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { IxValidatorsService } from 'app/modules/ix-forms/services/ix-validators.service';

@Injectable()
export class PropertiesOverrideValidatorService {
  constructor(
    private validatorsService: IxValidatorsService,
    private translate: TranslateService,
  ) {}

  validate = this.validatorsService.customValidator(
    (control: AbstractControl) => this.validatePropertyOverride(control),
    this.translate.instant('Invalid format. Expected format: <property>=<value>'),
  );

  validatePropertyOverride(control: AbstractControl): boolean {
    const overrides = control.value as string[];
    if (!overrides?.length) {
      return false;
    }

    return overrides.some((override) => {
      const [property, value] = override.split('=');
      return !property || !value;
    });
  }
}

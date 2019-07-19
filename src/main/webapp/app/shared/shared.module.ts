import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SpringAngularJhipsterSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [SpringAngularJhipsterSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [SpringAngularJhipsterSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SpringAngularJhipsterSharedModule {
  static forRoot() {
    return {
      ngModule: SpringAngularJhipsterSharedModule
    };
  }
}

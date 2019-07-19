import { NgModule } from '@angular/core';

import { SpringAngularJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [SpringAngularJhipsterSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [SpringAngularJhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class SpringAngularJhipsterSharedCommonModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'app/app-material.module';
import { AppCommonModule } from 'app/components/common/app-common.module';
import { CoreComponents } from 'app/core/components/core-components.module';
import { DashboardComponent } from 'app/pages/dashboard/components/dashboard/dashboard.component';
import { WidgetChartComponent } from 'app/pages/dashboard/components/widget-chart/widget-chart.component';
import { WidgetControllerComponent } from 'app/pages/dashboard/components/widget-controller/widget-controller.component';
import { WidgetCpuComponent } from 'app/pages/dashboard/components/widget-cpu/widget-cpu.component';
import { WidgetMemoryComponent } from 'app/pages/dashboard/components/widget-memory/widget-memory.component';
import { WidgetNetworkComponent } from 'app/pages/dashboard/components/widget-network/widget-network.component';
import { WidgetNicComponent } from 'app/pages/dashboard/components/widget-nic/widget-nic.component';
import { WidgetPoolComponent } from 'app/pages/dashboard/components/widget-pool/widget-pool.component';
import { WidgetStorageComponent } from 'app/pages/dashboard/components/widget-storage/widget-storage.component';
import {
  SimpleFailoverBtnComponent,
  SimpleFailoverBtnDialogComponent,
} from 'app/pages/dashboard/components/widget-sys-info/simple-failover-btn.component';
import { WidgetSysInfoComponent } from 'app/pages/dashboard/components/widget-sys-info/widget-sys-info.component';
import { WidgetComponent } from 'app/pages/dashboard/components/widget/widget.component';
import { EntityModule } from '../common/entity/entity.module';
import { routing } from './dashboard.routing';

@NgModule({
  imports: [
    CoreComponents,
    CommonModule,
    FormsModule,
    routing,
    MaterialModule,
    AppCommonModule,
    EntityModule,
    TranslateModule,
  ],
  declarations: [
    DashboardComponent,

    WidgetComponent,
    WidgetChartComponent,
    WidgetSysInfoComponent,
    WidgetNicComponent,
    WidgetCpuComponent,
    WidgetMemoryComponent,
    WidgetPoolComponent,
    WidgetControllerComponent,
    WidgetNetworkComponent,
    WidgetStorageComponent,
    SimpleFailoverBtnComponent,
    SimpleFailoverBtnDialogComponent,
  ],
  entryComponents: [
    WidgetComponent,
    WidgetChartComponent,
    WidgetSysInfoComponent,
    WidgetNicComponent,
    WidgetCpuComponent,
    WidgetMemoryComponent,
    WidgetPoolComponent,
    WidgetControllerComponent,
    WidgetNetworkComponent,
    WidgetStorageComponent,
  ],
})
export class DashboardModule {
}

import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { HistrikoPoCSharedModule, UserRouteAccessService } from './shared';
import { HistrikoPoCAppRoutingModule} from './app-routing.module';
import { HistrikoPoCHomeModule } from './home/home.module';
import { HistrikoPoCAdminModule } from './admin/admin.module';
import { HistrikoPoCAccountModule } from './account/account.module';
import { HistrikoPoCEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        HistrikoPoCAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        HistrikoPoCSharedModule,
        HistrikoPoCHomeModule,
        HistrikoPoCAdminModule,
        HistrikoPoCAccountModule,
        HistrikoPoCEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class HistrikoPoCAppModule {}

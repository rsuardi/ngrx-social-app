import { ModuleWithProviders, NgModule } from '@angular/core';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LadingPageComponent } from './components/lading-page/lading-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FakeNavComponent } from './components/fake-nav/fake-nav.component';
import { HeaderModule } from '../shared/modules/header/header.module';
import { IconsModule } from './modules/icons/icons.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LadingPageComponent,
        NotFoundComponent,
        FakeNavComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HeaderModule,
        IconsModule
    ],
    providers: [],
    exports: [
        NotFoundComponent,
        FakeNavComponent,
        HeaderComponent,
        FooterComponent,
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
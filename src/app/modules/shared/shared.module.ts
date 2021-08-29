import { ModuleWithProviders, NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LadingPageComponent } from './components/lading-page/lading-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FakeNavComponent } from './components/fake-nav/fake-nav.component';

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
        RouterModule
    ],
    providers: [],
    exports: [
        NotFoundComponent,
        FakeNavComponent
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
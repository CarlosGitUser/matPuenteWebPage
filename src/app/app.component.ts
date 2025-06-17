import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CTAComponent } from './components/cta/cta.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardsoneComponent } from './components/cardsone/cardsone.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { SectionSpecOffeComponent } from './components/section-spec-offe/section-spec-offe.component';
import { CardstwoComponent } from './components/cardstwo/cardstwo.component';
import { CardstreeComponent } from './components/cardstree/cardstree.component';
import { BlogCardsComponent } from './components/blog-cards/blog-cards.component';
import { TabMarcasComponent } from './components/tab-marcas/tab-marcas.component';
import { SectionSpectwoComponent } from './components/section-spectwo/section-spectwo.component';
import { CardsfourComponent } from './components/cardsfour/cardsfour.component';
import { CardsfiveComponent } from './components/cardsfive/cardsfive.component';
import { TabCompraSegComponent } from './components/tab-compra-seg/tab-compra-seg.component';
import { MobileAppPromoComponent } from './components/mobile-app-promo/mobile-app-promo.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HelpcenterComponent } from './components/helpcenter/helpcenter.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CTAComponent,
    BannerComponent,
    CardsoneComponent,
    CategoriasComponent,
    SectionSpecOffeComponent,
    CardstwoComponent,
    CardstreeComponent,
    BlogCardsComponent,
    TabMarcasComponent,
    SectionSpectwoComponent,
    CardsfourComponent,
    CardsfiveComponent,
    MobileAppPromoComponent,
    NewsletterComponent,
    HelpcenterComponent,
    TabCompraSegComponent,
    RouterModule,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'matPuenteWebPage';
}

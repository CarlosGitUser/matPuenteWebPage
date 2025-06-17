import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { CTAComponent } from '../cta/cta.component';
import { CardsoneComponent } from '../cardsone/cardsone.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { SectionSpecOffeComponent } from '../section-spec-offe/section-spec-offe.component';
import { CardstwoComponent } from '../cardstwo/cardstwo.component';
import { CardstreeComponent } from '../cardstree/cardstree.component';
import { BlogCardsComponent } from '../blog-cards/blog-cards.component';
import { TabMarcasComponent } from '../tab-marcas/tab-marcas.component';
import { SectionSpectwoComponent } from '../section-spectwo/section-spectwo.component';
import { CardsfourComponent } from '../cardsfour/cardsfour.component';
import { CardsfiveComponent } from '../cardsfive/cardsfive.component';
import { TabCompraSegComponent } from '../tab-compra-seg/tab-compra-seg.component';
import { MobileAppPromoComponent } from '../mobile-app-promo/mobile-app-promo.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { HelpcenterComponent } from '../helpcenter/helpcenter.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BannerComponent,
    CTAComponent,
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
    TabCompraSegComponent,
    MobileAppPromoComponent,
    NewsletterComponent,
    HelpcenterComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {}

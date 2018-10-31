import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { AppHomeComponent } from './app-home/app-home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AppFamilyComponent } from './app-family/app-family.component';
import { AppGrowComponent } from './app-grow/app-grow.component';
import { AppAdultsComponent } from './family/app-adults/app-adults.component';
import { AppKidsComponent } from './family/app-kids/app-kids.component';
import { AppEveryoneComponent } from './family/app-everyone/app-everyone.component';
import { AppBaptismComponent } from './grow/app-baptism/app-baptism.component';
import { AppCommunionComponent } from './grow/app-communion/app-communion.component';
import { AppStudyComponent } from './grow/app-study/app-study.component';
import { AppLambComponent } from './world/app-lamb/app-lamb.component';
import { AppMissionsComponent } from './world/app-missions/app-missions.component';
import { AppGivingComponent } from './world/app-giving/app-giving.component';
import { AppEldersComponent } from './whoWeAre/app-elders/app-elders.component';
import { AppBelieveComponent } from './whoWeAre/app-believe/app-believe.component';
import { AppServicesComponent } from './whoWeAre/app-services/app-services.component';
import { AppWorldComponent } from './app-world/app-world.component';
import { AppWhoWeAreComponent } from './app-who-we-are/app-who-we-are.component';
// tslint:disable-next-line:max-line-length
import { AppAdultWeeklyBibleStudiesComponent } from './family/adults/app-adult-weekly-bible-studies/app-adult-weekly-bible-studies.component';
import { AppSundayStudiesComponent } from './family/adults/app-sunday-studies/app-sunday-studies.component';
import { AppMensGroupComponent } from './family/adults/app-mens-group/app-mens-group.component';
import { AppWomansGroupComponent } from './family/adults/app-womans-group/app-womans-group.component';
import { AppVbsComponent } from './family/kids/app-vbs/app-vbs.component';
import { AppSundayBibleClassComponent } from './family/kids/app-sunday-bible-class/app-sunday-bible-class.component';
import { AppYouthGroupComponent } from './family/kids/app-youth-group/app-youth-group.component';
import { AppYouthOutreachComponent } from './family/kids/app-youth-outreach/app-youth-outreach.component';
import { AppCommunityOutreachComponent } from './family/everyone/app-community-outreach/app-community-outreach.component';
import { AppMonthlyPotluckComponent } from './family/everyone/app-monthly-potluck/app-monthly-potluck.component';
import { AppWeeklyBibleStudiesComponent } from './family/everyone/app-weekly-bible-studies/app-weekly-bible-studies.component';
import { AppHowToBeSavedComponent } from './grow/baptism/app-how-to-be-saved/app-how-to-be-saved.component';
import { AppBiblicalBaptismComponent } from './grow/baptism/app-biblical-baptism/app-biblical-baptism.component';
import { AppWeeklyCommunionComponent } from './grow/communion/app-weekly-communion/app-weekly-communion.component';
import { AppBiblicalCommunionComponent } from './grow/communion/app-biblical-communion/app-biblical-communion.component';
import { AppWeeklyBibleReadingComponent } from './grow/study/app-weekly-bible-reading/app-weekly-bible-reading.component';
import { AppYearlyBibleReadingComponent } from './grow/study/app-yearly-bible-reading/app-yearly-bible-reading.component';
import { AppSermonFollowUpComponent } from './grow/study/app-sermon-follow-up/app-sermon-follow-up.component';
import { AppNewsletterComponent } from './world/lamb/app-newsletter/app-newsletter.component';
import { AppDonationsComponent } from './world/lamb/app-donations/app-donations.component';
import { AppImpactComponent } from './world/lamb/app-impact/app-impact.component';
import { AppHowToHelpComponent } from './world/lamb/app-how-to-help/app-how-to-help.component';
import { AppEquidorComponent } from './world/missions/app-equidor/app-equidor.component';
import { AppSouthAmericaComponent } from './world/missions/app-south-america/app-south-america.component';
import { AppLocalMissionsComponent } from './world/missions/app-local-missions/app-local-missions.component';
import { AppBiblicalGivingComponent } from './world/giving/app-biblical-giving/app-biblical-giving.component';
import { AppBobBrownComponent } from './whoWeAre/elders/app-bob-brown/app-bob-brown.component';
import { AppBillFreemenComponent } from './whoWeAre/elders/app-bill-freemen/app-bill-freemen.component';
import { AppSofComponent } from './whoWeAre/believe/app-sof/app-sof.component';
import { AppWhoWeAreDetailsComponent } from './whoWeAre/believe/app-who-we-are-details/app-who-we-are-details.component';
import { AppCouncelingComponent } from './whoWeAre/services/app-counceling/app-counceling.component';
import { AppWeddingsComponent } from './whoWeAre/services/app-weddings/app-weddings.component';
import { AppPrayerComponent } from './whoWeAre/services/app-prayer/app-prayer.component';
import { ContactComponent } from './whoWeAre/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    AppHomeComponent,
    SideMenuComponent,
    AppFamilyComponent,
    AppGrowComponent,
    AppAdultsComponent,
    AppKidsComponent,
    AppEveryoneComponent,
    AppBaptismComponent,
    AppCommunionComponent,
    AppStudyComponent,
    AppLambComponent,
    AppMissionsComponent,
    AppGivingComponent,
    AppEldersComponent,
    AppBelieveComponent,
    AppServicesComponent,
    AppWorldComponent,
    AppWhoWeAreComponent,
    AppAdultWeeklyBibleStudiesComponent,
    AppSundayStudiesComponent,
    AppMensGroupComponent,
    AppWomansGroupComponent,
    AppVbsComponent,
    AppSundayBibleClassComponent,
    AppYouthGroupComponent,
    AppYouthOutreachComponent,
    AppCommunityOutreachComponent,
    AppMonthlyPotluckComponent,
    AppWeeklyBibleStudiesComponent,
    AppHowToBeSavedComponent,
    AppBiblicalBaptismComponent,
    AppWeeklyCommunionComponent,
    AppBiblicalCommunionComponent,
    AppWeeklyBibleReadingComponent,
    AppYearlyBibleReadingComponent,
    AppSermonFollowUpComponent,
    AppNewsletterComponent,
    AppDonationsComponent,
    AppImpactComponent,
    AppHowToHelpComponent,
    AppEquidorComponent,
    AppSouthAmericaComponent,
    AppLocalMissionsComponent,
    AppBiblicalGivingComponent,
    AppBobBrownComponent,
    AppBillFreemenComponent,
    AppSofComponent,
    AppWhoWeAreDetailsComponent,
    AppCouncelingComponent,
    AppWeddingsComponent,
    AppPrayerComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

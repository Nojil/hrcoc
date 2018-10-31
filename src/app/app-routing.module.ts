import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Home Route
import { AppHomeComponent } from './app-home/app-home.component';

// Fmaily Routes
import { AppFamilyComponent } from './app-family/app-family.component';
import { AppAdultsComponent } from './family/app-adults/app-adults.component';
import { AppKidsComponent } from './family/app-kids/app-kids.component';
import { AppEveryoneComponent } from './family/app-everyone/app-everyone.component';

// family/adults/..
// tslint:disable-next-line:max-line-length
import { AppAdultWeeklyBibleStudiesComponent } from './family/adults/app-adult-weekly-bible-studies/app-adult-weekly-bible-studies.component';
import { AppSundayStudiesComponent } from './family/adults/app-sunday-studies/app-sunday-studies.component';
import { AppMensGroupComponent } from './family/adults/app-mens-group/app-mens-group.component';
import { AppWomansGroupComponent } from './family/adults/app-womans-group/app-womans-group.component';

// family/kids/..
import { AppVbsComponent } from './family/kids/app-vbs/app-vbs.component';
import { AppYouthOutreachComponent } from './family/kids/app-youth-outreach/app-youth-outreach.component';
import { AppSundayBibleClassComponent } from './family/kids/app-sunday-bible-class/app-sunday-bible-class.component';
import { AppYouthGroupComponent } from './family/kids/app-youth-group/app-youth-group.component';

// family/everyone/..
import { AppWeeklyBibleStudiesComponent } from './family/everyone/app-weekly-bible-studies/app-weekly-bible-studies.component';
import { AppCommunityOutreachComponent } from './family/everyone/app-community-outreach/app-community-outreach.component';
import { AppMonthlyPotluckComponent } from './family/everyone/app-monthly-potluck/app-monthly-potluck.component';

// Grow Routes
import { AppGrowComponent } from './app-grow/app-grow.component';
import { AppBaptismComponent } from './grow/app-baptism/app-baptism.component';
import { AppCommunionComponent } from './grow/app-communion/app-communion.component';
import { AppStudyComponent } from './grow/app-study/app-study.component';

// grow/baptism/..
import { AppBiblicalBaptismComponent } from './grow/baptism/app-biblical-baptism/app-biblical-baptism.component';
import { AppHowToBeSavedComponent } from './grow/baptism/app-how-to-be-saved/app-how-to-be-saved.component';

// grow/communion/..
import { AppWeeklyCommunionComponent } from './grow/communion/app-weekly-communion/app-weekly-communion.component';
import { AppBiblicalCommunionComponent } from './grow/communion/app-biblical-communion/app-biblical-communion.component';

// grow/study/..
import { AppSermonFollowUpComponent } from './grow/study/app-sermon-follow-up/app-sermon-follow-up.component';
import { AppYearlyBibleReadingComponent } from './grow/study/app-yearly-bible-reading/app-yearly-bible-reading.component';
import { AppWeeklyBibleReadingComponent } from './grow/study/app-weekly-bible-reading/app-weekly-bible-reading.component';

// World Routes
import { AppWorldComponent } from './app-world/app-world.component';
import { AppMissionsComponent } from './world/app-missions/app-missions.component';
import { AppLambComponent } from './world/app-lamb/app-lamb.component';
import { AppGivingComponent } from './world/app-giving/app-giving.component';

// world/missions/..
import { AppSouthAmericaComponent } from './world/missions/app-south-america/app-south-america.component';
import { AppEquidorComponent } from './world/missions/app-equidor/app-equidor.component';
import { AppLocalMissionsComponent } from './world/missions/app-local-missions/app-local-missions.component';

// world/lamb/..
import { AppImpactComponent } from './world/lamb/app-impact/app-impact.component';
import { AppHowToHelpComponent } from './world/lamb/app-how-to-help/app-how-to-help.component';
import { AppNewsletterComponent } from './world/lamb/app-newsletter/app-newsletter.component';
import { AppDonationsComponent } from './world/lamb/app-donations/app-donations.component';

// world/giving/..
import { AppBiblicalGivingComponent } from './world/giving/app-biblical-giving/app-biblical-giving.component';

// Who We Are Routes
import { AppWhoWeAreComponent } from './app-who-we-are/app-who-we-are.component';
import { AppEldersComponent } from './whoWeAre/app-elders/app-elders.component';
import { AppServicesComponent } from './whoWeAre/app-services/app-services.component';
import { AppBelieveComponent } from './whoWeAre/app-believe/app-believe.component';

// whoWeAre/elders/..
import { AppBobBrownComponent } from './whoWeAre/elders/app-bob-brown/app-bob-brown.component';
import { AppBillFreemenComponent } from './whoWeAre/elders/app-bill-freemen/app-bill-freemen.component';

// whoWeAre/services/..
import { AppPrayerComponent } from './whoWeAre/services/app-prayer/app-prayer.component';
import { AppCouncelingComponent } from './whoWeAre/services/app-counceling/app-counceling.component';
import { AppWeddingsComponent } from './whoWeAre/services/app-weddings/app-weddings.component';

// whoWeAre/believe/..
import { AppSofComponent } from './whoWeAre/believe/app-sof/app-sof.component';
import { AppWhoWeAreDetailsComponent } from './whoWeAre/believe/app-who-we-are-details/app-who-we-are-details.component';

//contact
import { ContactComponent } from './whoWeAre/contact/contact.component';

const routes: Routes = [
  {
    path: '', component: AppHomeComponent
  },
  {
    path: 'family', component: AppFamilyComponent
  },
  {
    path: 'grow', component: AppGrowComponent
  },
  {
    path: 'world', component: AppWorldComponent
  },
  {
    path: 'whoWeAre', component: AppWhoWeAreComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'family/adults', component: AppAdultsComponent
  },
  {
    path: 'family/adults/weeklyBibleStudies', component: AppAdultWeeklyBibleStudiesComponent
  },
  {
    path: 'family/adults/sundayBibleStudy', component: AppSundayStudiesComponent
  },
  {
    path: 'family/adults/mensGroup', component: AppMensGroupComponent
  },
  {
    path: 'family/adults/womansGroup', component: AppWomansGroupComponent
  },
  {
    path: 'family/kids', component: AppKidsComponent
  },
  {
    path: 'family/kids/vbs', component: AppVbsComponent
  },
  {
    path: 'family/kids/sundayBibleClass', component: AppSundayBibleClassComponent
  },
  {
    path: 'family/kids/youthGroup', component: AppYouthGroupComponent
  },
  {
    path: 'family/kids/youthOutreach', component: AppYouthOutreachComponent
  },
  {
    path: 'family/everyone', component: AppEveryoneComponent
  },
  {
    path: 'family/everyone/communityOutreach', component: AppCommunityOutreachComponent
  },
  {
    path: 'family/everyone/weeklyBibleStudies', component: AppWeeklyBibleStudiesComponent
  },
  {
    path: 'family/everyone/monthlyPotluck', component: AppMonthlyPotluckComponent
  },
  {
    path: 'grow/baptism', component: AppBaptismComponent
  },
  {
    path: 'grow/baptism/biblicalBaptism', component: AppBiblicalBaptismComponent
  },
  {
    path: 'grow/baptism/howToBeSaved', component: AppHowToBeSavedComponent
  },
  {
    path: 'grow/communion', component: AppCommunionComponent
  },
  {
    path: 'grow/communion/biblicalCommunion', component: AppBiblicalCommunionComponent
  },
  {
    path: 'grow/communion/weeklyCommunion', component: AppWeeklyCommunionComponent
  },
  {
    path: 'grow/study', component: AppStudyComponent
  },
  {
    path: 'grow/study/weeklyBibleReading', component: AppWeeklyBibleReadingComponent
  },
  {
    path: 'grow/study/yearlyBibleReading', component: AppYearlyBibleReadingComponent
  },
  {
    path: 'grow/study/sermonFollowUp', component: AppSermonFollowUpComponent
  },
  {
    path: 'world/giving', component: AppGivingComponent
  },
  {
    path: 'world/giving/biblicalGiving', component: AppBiblicalGivingComponent
  },
  {
    path: 'world/lamb', component: AppLambComponent
  },
  {
    path: 'world/lamb/newsletter', component: AppNewsletterComponent
  },
  {
    path: 'world/lamb/donations', component: AppDonationsComponent
  },
  {
    path: 'world/lamb/howToHelp', component: AppHowToHelpComponent
  },
  {
    path: 'world/lamb/impact', component: AppImpactComponent
  },
  {
    path: 'world/missions', component: AppMissionsComponent
  },
  {
    path: 'world/missions/equidor', component: AppEquidorComponent
  },
  {
    path: 'world/missions/localMissions', component: AppLocalMissionsComponent
  },
  {
    path: 'world/missions/southAmerica', component: AppSouthAmericaComponent
  },
  {
    path: 'whoWeAre/elders', component: AppEldersComponent
  },
  {
    path: 'whoWeAre/elders/bobBrown', component: AppBobBrownComponent
  },
  {
    path: 'whoWeAre/elders/billFreemen', component: AppBillFreemenComponent
  },
  {
    path: 'whoWeAre/believe', component: AppBelieveComponent
  },
  {
    path: 'whoWeAre/believe/sof', component: AppSofComponent
  },
  {
    path: 'whoWeAre/believe/whoWeAre', component: AppWhoWeAreDetailsComponent
  },
  {
    path: 'whoWeAre/services', component: AppServicesComponent
  },
  {
    path: 'whoWeAre/services/counceling', component: AppCouncelingComponent
  },
  {
    path: 'whoWeAre/services/prayer', component: AppPrayerComponent
  },
  {
    path: 'whoWeAre/services/weddings', component: AppWeddingsComponent
  }

];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }

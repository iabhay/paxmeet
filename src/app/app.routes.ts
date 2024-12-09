import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServicesComponent } from './pages/services/services.component';
import { ServiceDetailComponent } from './pages/service-detail/service-detail.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TeamComponent } from './pages/team/team.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { BlogSidebarComponent } from './pages/blog-sidebar/blog-sidebar.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { OnepageComponent } from './pages/onepage/onepage.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { LockScreenComponent } from './pages/lock-screen/lock-screen.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { ComingsoonComponent } from './pages/comingsoon/comingsoon.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { ErrorComponent } from './pages/error/error.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NftExploreComponent } from './pages/nft/nft-explore/nft-explore.component';
import { NftDetailComponent } from './pages/nft/nft-detail/nft-detail.component';
import { CollectionComponent } from './pages/nft/collection/collection.component';
import { WalletComponent } from './pages/nft/wallet/wallet.component';
import { UploadItemComponent } from './pages/nft/upload-item/upload-item.component';
import { CreatorsComponent } from './pages/nft/creators/creators.component';
import { CreatorProfileComponent } from './pages/nft/creator-profile/creator-profile.component';
import { ProfileSettingComponent } from './pages/nft/profile-setting/profile-setting.component';

export const routes: Routes = [
    {path:'', redirectTo: 'onepage', pathMatch: 'full'},
    {path:'onepage', component:OnepageComponent},
    {path:'aboutus', component:AboutusComponent},
    {path:'services', component:ServicesComponent},
    {path:'service-detail', component:ServiceDetailComponent},
    {path:'pricing', component:PricingComponent},
    {path:'team', component:TeamComponent},
    {path:'testimonial', component:TestimonialComponent},
    {path:'faqs', component:FaqsComponent},
    {path:'blogs', component:BlogsComponent},
    {path:'blog-sidebar', component:BlogSidebarComponent},
    {path:'blog-detail', component:BlogDetailComponent},
    {path:'blog-detail/:id', component:BlogDetailComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'reset-password', component:ResetPasswordComponent},
    {path:'lock-screen', component:LockScreenComponent},
    {path:'terms', component:TermsComponent},
    {path:'privacy', component:PrivacyComponent},
    {path:'comingsoon', component:ComingsoonComponent},
    {path:'maintenance', component:MaintenanceComponent},
    {path:'error', component:ErrorComponent},
    {path:'contactus', component:ContactusComponent},
    {path:'nft-explore', component:NftExploreComponent},
    {path:'nft-detail', component:NftDetailComponent},
    {path:'nft-detail/:id', component:NftDetailComponent},
    {path:'collection', component:CollectionComponent},
    {path:'wallet', component:WalletComponent},
    {path:'upload-item', component:UploadItemComponent},
    {path:'creators', component:CreatorsComponent},
    {path:'creator-profile', component:CreatorProfileComponent},
    {path:'creator-profile/:id', component:CreatorProfileComponent},
    {path:'profile-setting', component:ProfileSettingComponent},
];

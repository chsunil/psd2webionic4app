import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'post', pathMatch: 'full' },
  { path: 'post', loadChildren: './home/home.module#HomePageModule' },
  { path: 'posts', loadChildren: './home/home.module#HomePageModule' },
  { path: 'post-details/:postId', loadChildren: './post-details/post-details.module#PostDetailsPageModule' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesPageModule' },
  { path: 'pagedetails/:postId', loadChildren: './pagedetails/pagedetails.module#PagedetailsPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

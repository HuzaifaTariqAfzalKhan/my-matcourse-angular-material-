import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';
import { PostComponent } from './blog/post/post.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/my-best-blog', component: PostComponent },
  { path: 'admin/blog', component: AdminBlogComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

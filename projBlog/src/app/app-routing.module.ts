import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SobreComponent } from './sobre/sobre.component';
import { PostComponent } from './post/post.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'post', component: HomeComponent },
  { path: 'post/:id', component: PostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Nosso módulo recém instalado
  exports: [RouterModule],

})
export class AppRoutingModule { }

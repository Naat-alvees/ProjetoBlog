import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../models/post.modal';
import { Comment } from '../models/comment.model';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommentService } from '../comment.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public modaleditar: BsModalRef;
  public modalExcluir: BsModalRef;
  public modalExcluirComentario: BsModalRef;
  
  public id_post : number;
  public post : Post = new Post();
  public comments: Comment[];
  
  public formularioEditar: FormGroup = new FormGroup({
    'autor': new FormControl(null, [Validators.required]),
    'titulo': new FormControl(null, [Validators.required]),
    'corpo': new FormControl(null, [Validators.required])
  });
  
  public formularioEditarComentario: FormGroup = new FormGroup({
    'tituloComentario': new FormControl(null, [Validators.required]),
    'textoComentario': new FormControl(null, [Validators.required])
  });

  public crtEditar: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private postService : PostService, 
    private commentService: CommentService, 
    private modalService: BsModalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.id_post = this.route.snapshot.params['id'];

    // Le o post
    this.postService.getPost(this.id_post).subscribe(res => {
      this.post = res[0];
      this.formularioEditar.patchValue({
        autor: this.post.author,
        titulo: this.post.title,
        corpo: this.post.body
      });
      }, err => {
      console.log(err);
    });


    //Le os comentarios do post
    this.commentService.getComments().subscribe(res => {
      this.comments = res;
    }, err => {
      console.log(err);
    });
  }

  openModalEditar(template: TemplateRef<any>) {
    this.modaleditar = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

  openModalExcluir(template: TemplateRef<any>) {
    this.modalExcluir = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

  openModalExcluirComentario(template: TemplateRef<any>) {
    this.modalExcluirComentario = this.modalService.show(template, {class: 'modal-dialog-centered'});
  }

  editarPost(): void{
    let post: Post = new Post();
    post.author = this.formularioEditar.value.autor;
    post.body = this.formularioEditar.value.corpo;
    post.title = this.formularioEditar.value.titulo;
    this.postService.updatePost(this.id_post, post).subscribe( res => {
        this.ngOnInit();
        this.modaleditar.hide()
    }, (err) => {
      console.log(err);
    });
  }

  excluirPost():void{
    this.postService.deletePost(this.id_post).subscribe( res => {
      this.modalExcluir.hide();
      this.router.navigate(['']);
    }, (err) => {
      console.log(err);
    });
  }

  addComentario(formulario: NgForm): void {
    let comentario: Comment = new Comment();
    comentario.post_id = this.id_post;
    comentario.title = formulario.value.title;
    comentario.body = formulario.value.body;
    comentario.email = formulario.value.email; 
    comentario.author = formulario.value.author;
    this.commentService.addComment(comentario).subscribe( res => {
      formulario.reset();
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    });
  }

  clickEditarComentario(comentarioAtual: Comment): void{
    this.crtEditar = true;
    this.formularioEditarComentario.patchValue({
      tituloComentario: comentarioAtual.title,
      textoComentario: comentarioAtual.body
    });
  }

  editarComentario(id_comentario: number): void{
    let comentario: Comment = new Comment();
    comentario.title = this.formularioEditarComentario.value.tituloComentario;
    comentario.body = this.formularioEditarComentario.value.textoComentario;
    console.log(comentario);
    this.commentService.updateComment(id_comentario,comentario).subscribe( res => {
      this.crtEditar = false;
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    });
  }

  excluirComentario(id_comentario: number):void{
    console.log(id_comentario)
    this.commentService.deleteComment(id_comentario).subscribe( res => {
      this.modalExcluirComentario.hide();
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    });
  }

  getNumeroaleatorio(){
    let min = 1;
    let max = 6;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

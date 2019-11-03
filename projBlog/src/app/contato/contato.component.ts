import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../models/contact.model';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
  providers: [ ContactService ] 
})
export class ContatoComponent implements OnInit {

 
  public idContato: Contact
  constructor(private contatoService: ContactService) { }

  ngOnInit() {
    
  }
  
  public addContato(formulario: NgForm): void {
    let contato: Contact = new Contact(formulario.value.nome, formulario.value.email, formulario.value.mensagem)
    this.contatoService.efetivarContato(contato).subscribe( err => {
      console.log(err);
      this.idContato = err;
    })
    
  }

  

}

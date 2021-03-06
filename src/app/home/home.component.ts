import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends : User[];
  query: string = '';
  user : User;
  friendEmail: string="";
  constructor(private userService: UserService, private authenticationService: AuthenticationService,
    private router: Router,private modalService: NgbModal, private requestService: RequestsService) {    
    userService.getUsers().valueChanges().subscribe(
      (data: User[]) => {
        this.friends = data;
      }, (error) => {
        console.log(error);
      });

      
    this.authenticationService.getStatus().subscribe((status) => {
      this.userService.getUserById(status.uid).valueChanges().subscribe((data: User) => {
        this.user = data;
        console.log(this.user);
      }, (error) => {
        console.log(error);
      });
    }, (error) => {
      console.log(error);
    });
  }

  ngOnInit() {
  }
  logout(){
    this.authenticationService.logOut().then(()=>{
      alert('Session Cerrada');
      this.router.navigate(['login']);
    }).catch((error) =>{
      console.log(error);
    })
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {      
    }, (reason) => {
    });
  }

  sendRequest(){
    const request = {
      timestamp: Date.now(),
      receiver_email: this.friendEmail,
      sender: this.user.uid,
      status: 'pending'
    };
    this.requestService.createRequest(request).then(() => {
      alert('Solicitud Enviada');
    }).catch((error)=>{
      alert('HUBO UN ERROR');
      console.log(error);
    })
  }

}

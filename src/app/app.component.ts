import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
declare var jquery:any;
declare var $ :any;

import { Customer } from './customer';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    // closeResult: string;

    // constructor(private modalService: NgbModal) { }
    title = 'app';
    toggleMenu() {
      $('#subsidebar').toggleClass('active');
      if (!$("#subsidebar").hasClass('active')) {
          $(".navbar__quickadd--button").addClass("hidden");
          $(".subsidebar-header").addClass("hidden");
      }
    }
    transitionEnd(event) {
      if (event.propertyName == 'max-width') {
          if ($("#subsidebar").hasClass('active')) {
              $(".navbar__quickadd--button").toggleClass("hidden");
              $(".subsidebar-header").toggleClass("hidden");
          }
      }
    }


}

// export class ModalComponent {
//     closeResult: string;
//     constructor(private modalService: NgbModal) { }
//
//     open(content) {
//         this.modalService.open(content).result.then((result)=> {
//             this.closeResult = "closed with: ${result}";
//         }, (reason) => {
//             this.closeResult = 'dismissed with: ${this.getDismissReason(reason)}';
//         });
//     }
//     private getDismissReason(reason: any): string {
//         if (reason === ModalDismissReasons.ESC) {
//             return 'by pressing ESC';
//         }
//         else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//             return 'by clicking on a backdrop';
//         }
//         else {
//             return  `with: ${reason}`;
//         }
//     }
// }

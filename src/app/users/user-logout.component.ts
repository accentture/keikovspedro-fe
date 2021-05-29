import { Component, OnInit, AfterViewInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

//images
import { IMAGE_LOGOUT } from './user-logout.const';

@Component({
    selector: 'user-logout',
    templateUrl: './user-logout.component.html',
    styleUrls: ['./user-logout.component.scss'],
})
export class UserLogoutComponent implements OnInit, AfterViewInit {
    @ViewChild('closeSessionButton') closeSessionButton?: ElementRef;
    @Output() stateLogin = new EventEmitter<boolean>();

    imageForLogout: string = IMAGE_LOGOUT;
    showbuttonAdded: boolean = false;

    constructor() {}

    ngOnInit(): void {}
    ngAfterViewInit() {
        console.log(this.closeSessionButton?.nativeElement);
    }
    sendLogout() {
        this.stateLogin.emit(false);
        this.showCloseSesionButton();
    }
    showCloseSesionButton() {
        if (!this.showbuttonAdded) {
            this.closeSessionButton?.nativeElement.classList.add('showButton');
            this.showbuttonAdded = true;
        } else {
            this.closeSessionButton?.nativeElement.classList.remove('showButton');
            this.showbuttonAdded = false;
        }
    }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StateUserService {
    private updateCandidateSource = new Subject<boolean>();
    updateStateUser$ = this.updateCandidateSource.asObservable();

    constructor() {}
    updateStateUser() {
        this.updateCandidateSource.next(true);
    }
    removeLoginFromLocalStorage() {
        localStorage.removeItem('data_user');
        this.remoteActivityFromLocalStorage();
    }
    remoteActivityFromLocalStorage() {
        localStorage.removeItem('last_vote_id');
    }
}

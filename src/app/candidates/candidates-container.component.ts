import { Component, OnInit } from '@angular/core';
import { CandidatesService } from './candidates.service';

@Component({
  selector: 'app-candidates-container',
  templateUrl: './candidates-container.component.html',
  styleUrls: ['./candidates-container.component.scss']
})
export class CandidatesContainerComponent implements OnInit {
  private demoVote:string = '60aea17edfdcf82068c9614d'
  candidates!:any[]
  constructor(
    private candidatesService:CandidatesService, 
  ) { }

  ngOnInit(): void {
    this.obtainCandidates()
  }
  obtainCandidates(){
    this.candidatesService.getCandidates().subscribe( (response:any) => {
      console.log(response)
      this.candidates = response
    })
  }
  saveVote(userVote:any, newVoteId:string, candidate:any){
    console.log(userVote.thisChoose )
    if(userVote.firstVote){
      this.candidatesService.makeVote(newVoteId).subscribe( response => {
        this.obtainCandidates()
      })
    }else{
      this.candidatesService.updateVote(newVoteId, userVote.thisChoose).subscribe( response => {
        this.obtainCandidates()
      })
    } 
  }
}

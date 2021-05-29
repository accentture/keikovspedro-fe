import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { CandidatesService } from './candidates.service';
import { photosCandidates } from './photos-candidates';

@Component({
  selector: 'app-candidates-container',
  templateUrl: './candidates-container.component.html',
  styleUrls: ['./candidates-container.component.scss']
})
export class CandidatesContainerComponent implements OnInit {
  @ViewChildren('imagesKeiko')imagesKeiko!:QueryList<ElementRef> 
  @ViewChildren('imagesPedro')imagesPedro!:QueryList<ElementRef>  
  @ViewChildren('containerImages')containers!:QueryList<ElementRef>  

  candidates!: any[]
  photosCandidates = photosCandidates
  winner: string = 'nothing'

  constructor(
    private candidatesService: CandidatesService,
  ) { }

  ngOnInit(): void {
    this.obtainCandidates()
    console.log(this.winner)
  }
  ngAfterViewInit() {
    
    this.setPositionInialOfPhotos()
  }
  obtainCandidates() {
    this.candidatesService.getCandidates().subscribe((response: any) => {
      //console.log(response)
      this.candidates = response
    })
  }
  saveVote(userVote: any, candidate: object | any) {
    if (userVote.firstVote) {
      this.candidatesService.makeVote(candidate._id).subscribe(response => {
        this.obtainCandidates()
        this.winner = candidate.names
        //this.turnPhotos(candidate.names)
      })
    } else {
      this.candidatesService.updateVote(candidate._id, userVote.thisChoose).subscribe(response => {
        this.obtainCandidates()
        this.winner = candidate.names
        //this.turnPhotos(candidate.names)
      })
    }
  }
  setPositionInialOfPhotos() {

    this.imagesKeiko.changes.subscribe( () => {
      this.imagesKeiko.toArray().forEach( (image, index) => {
        if(index == 0){
          if(this.winner == 'nothing'){
            image.nativeElement.style['z-index'] = 2
          }
        }
      })
    })

    this.imagesPedro.changes.subscribe( () => {
      this.imagesPedro.toArray().forEach( (image, index) => {
        if(index == 0){
          if(this.winner == 'nothing'){
            image.nativeElement.style['z-index'] = 2
          }
        }
      })
    })

  }

  turnPhotos(nameCandidate: string) {
    this.containers.changes.subscribe( () => {
      this.containers.toArray().forEach( (container, index) => {
        container.nativeElement.style.transform = 'rotateY(180deg)'
      })
    })


    this.imagesKeiko.changes.subscribe( () => {
      this.imagesKeiko.toArray().forEach( (image, index) => {
        if(index == 0){
          if(this.winner == 'keiko'){
            image.nativeElement.style['z-index'] = 0
          }else if(this.winner == 'pedro'){
            image.nativeElement.style['z-index'] = 0
          }
        }

        if(index == 1){
          if(this.winner == 'keiko'){
            image.nativeElement.style['z-index'] = 2
          }else if(this.winner == 'pedro'){
            image.nativeElement.style['z-index'] = 1
          }
        }

        if(index == 2){
          if(this.winner == 'keiko'){
            image.nativeElement.style['z-index'] = 1
          }else if(this.winner == 'pedro'){
            image.nativeElement.style['z-index'] = 2
          }
        }

      })
    })

    this.imagesPedro.changes.subscribe( () => {
      this.imagesPedro.toArray().forEach( (image, index) => {
        if(index == 0){
          if(this.winner == 'keiko'){
            image.nativeElement.style['z-index'] = 0
          }else if(this.winner == 'pedro'){
            image.nativeElement.style['z-index'] = 0
          }
        }

        if(index == 1){
          if(this.winner == 'keiko'){
            image.nativeElement.style['z-index'] = 1
          }else if(this.winner == 'pedro'){
            image.nativeElement.style['z-index'] = 2
          }
        }

        if(index == 2){
          if(this.winner == 'keiko'){
            image.nativeElement.style['z-index'] = 2
          }else if(this.winner == 'pedro'){
            image.nativeElement.style['z-index'] = 1
          }
        }


      })
    })
  }
}

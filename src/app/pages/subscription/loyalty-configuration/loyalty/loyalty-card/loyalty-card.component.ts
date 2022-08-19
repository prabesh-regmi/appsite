import { Component, ElementRef, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-loyalty-card',
  templateUrl: './loyalty-card.component.html',
  styleUrls: ['./loyalty-card.component.scss']
})
export class LoyaltyCardComponent implements OnInit {
  customSub = new Subject<HTMLElement>();

  isVisible = false;
  isConfirmLoading = false;

  selectedValue = null;
  imgList=[{
    imageSrc:'../../../../../../assets/card.jpg'
  }
  ];
  loyaltyCardSrc:any ='../../../../../../assets/card.jpg';
  stampSrc:any = '../../../../../../assets/approved.jpg';
  isrc=null;

  constructor(private elementRef: ElementRef) {}
  imageUpload(event:any,from:string){
    console.log("here");
    var reader = new FileReader();

    reader.onload =  () =>{

      from==='stamp'? this.stampSrc = reader.result : this.loyaltyCardSrc = reader.result;
        console.log(reader.result);
    }
    
    reader.readAsDataURL(event.target.files[0]);

}
open() {
  this.customSub.next(this.elementRef.nativeElement.querySelector('img'));
  console.log('clicked')
}

  // showModal(): void {
  //   this.isVisible = true;
  // }

  // handleOk(): void {
  //   this.isConfirmLoading = true;
  //   setTimeout(() => {
  //     if(this.isrc){
  //       this.imgList.push({imageSrc:this.isrc});
  //     }
  //     this.isrc=null;
  //     this.isVisible = false;
  //     this.isConfirmLoading = false;
  //   }, 500);
  // }

  // handleCancel(): void {
  //   this.isVisible = false;
  //   this.isrc=null;

  // }

  // // handleChange(e:any){
  // //   let img=new Image();
  // //   console.log("I am here"+e.targe.files);
  // //   // if(e.targe.files){
  // //   //   var reader = new FileReader();
  // //   //   reader.readAsDataURL(e.target.files[0]);
  // //   //   reader.onload=(event:any)=>{
  // //   //     img.src=event.target.result;
  // //   //     console.log("I am here"+img);
  // //   //   }
  // //   // }
  // // }

  ngOnInit(): void {
  }



}

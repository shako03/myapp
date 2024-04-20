import { MAT_DIALOG_DATA, MatDialogRef, } from '@angular/material/dialog';
import { Component, Inject,OnInit, } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
constructor(@Inject(MAT_DIALOG_DATA)private dialogData:MatDialogRef<any>, private matDialog:MatDialogRef<any>){}
res:any


ngOnInit(): void {
 this.res = this.dialogData
}





closeModal(){
  this.matDialog.close();
}

}

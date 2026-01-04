import { Component, OnInit, ViewChild } from '@angular/core';
import { Istudent } from '../shared/model/student';
import { students } from '../shared/const/student';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-stdudent',
  templateUrl: './stdudent.component.html',
  styleUrls: ['./stdudent.component.scss'],
})
export class StdudentComponent implements OnInit {
  constructor(private _matsnack: MatSnackBar, private _dialog: MatDialog) {}

  ngOnInit(): void {}

  stdArr: Array<Istudent> = students;

  isEditmode: boolean = false;

  edit_id: string = '';

  @ViewChild('stdForm') stdForm!: NgForm;

    showMessege(msg : string){
    
    this._matsnack.open(msg,"Close",{

         horizontalPosition : "left",
         verticalPosition : "top",
         duration : 3000
    })

  }

  onStdAdd() {
    if (this.stdForm.valid) {
      let stdObj: Istudent = {
        ...this.stdForm.form.value,
        id: Date.now().toString(),
      };

      this.stdArr.push(stdObj);

      this.stdForm.reset();

       this.showMessege("Student Added Successfully")
    }
  }

  onStdEdit(std: Istudent) {
    this.stdForm.form.patchValue(std);
    this.isEditmode = true;
    this.edit_id = std.id;
  }

  onStdUpdate() {
    if (this.stdForm.valid) {
      let Update_obj: Istudent = {
        ...this.stdForm.form.value,
        id: this.edit_id,
      };

      let update_ind = this.stdArr.findIndex((std) => std.id === this.edit_id);

      this.stdArr[update_ind] = Update_obj;

      this.stdForm.reset();

      this.showMessege("Student updated Successfully")
    }
  }

  onstdRemove(id: string) {
    let diaref = this._dialog.open(GetConfirmComponent, {
      disableClose: true,
    });

    diaref.afterClosed().subscribe((res) => {
      if (res) {
        this.stdArr = this.stdArr.filter((std) => std.id !== id);

        this.showMessege("Student removed Successfully")
      }
    });
  }

  trackById(index : number, std : Istudent){
  
      return std.id;
    }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { Itudo } from '../shared/model/tudo';
import { tudoArr } from '../shared/const/tudo';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-tudo',
  templateUrl: './tudo.component.html',
  styleUrls: ['./tudo.component.scss'],
})
export class TudoComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private _dialog: MatDialog) {}

  ngOnInit(): void {}

  IsEdiMode: boolean = false;

  edit_id: string = '';

  tudoArr: Array<Itudo> = tudoArr;

  @ViewChild('tudoForm') tudoForm!: NgForm;

  showMessege(msg : string){
    
    this._snackBar.open(msg,"Close",{

         horizontalPosition : "left",
         verticalPosition : "top",
         duration : 3000
    })

  }

  OntudoAdd() {
    if (this.tudoForm.valid) {
      let obj: Itudo = {
        ...this.tudoForm.form.value,
        id: Date.now().toString(),
      };

      this.tudoArr.push(obj);
      this.tudoForm.reset();
      this.showMessege("Tudo Added Successfully")
    }
  }

  onTudoEdit(tudo: Itudo) {
    this.tudoForm.form.patchValue(tudo);

    this.IsEdiMode = true;

    this.edit_id = tudo.tudoId;
  }

  onTudoUpdate() {
    if (this.tudoForm.valid) {
      let update_obj = {
        ...this.tudoForm.form.value,
        tudoId: this.edit_id,
      };

      let upadte_ind = this.tudoArr.findIndex((t) => t.tudoId === this.edit_id);

      this.tudoArr[upadte_ind] = update_obj;

      this.tudoForm.reset();

      this.showMessege("Tudo Updated Successfully")
    }
  }

  onTudoRemove(id: string) {
    let diaConfig: MatDialogConfig = {
      disableClose: true,
    };

    let diaRef = this._dialog.open(GetConfirmComponent, diaConfig);

    diaRef.afterClosed().subscribe((res) => {
      if (res) {
        this.tudoArr = this.tudoArr.filter((t) => t.tudoId !== id);
        this.showMessege("Tudo Removed Successfully")
      }
    });
  }

  trackById(index : number, tudo : Itudo){
    return tudo.tudoId
  }
}

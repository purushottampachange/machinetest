import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomRegex } from '../shared/const/validatorsPatterns';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.scss'],
})
export class TDFormComponent implements OnInit {
  constructor() {}

  @ViewChild('signUpForm') signUpForm!: NgForm;

  pattrens = CustomRegex;

  ngOnInit(): void {}

  onSignUP() {
    console.log(this.signUpForm);
  }
}

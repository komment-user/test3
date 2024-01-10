import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

export interface DialogData {
  name: string;
  login: string;
}

@Component({
  selector: "app-no-scatter",
  templateUrl: "./no-scatter.component.html",
  styleUrls: ["./no-scatter.component.scss"],
})
  
export class NoScatterComponent implements OnInit {
/**
* @description This is a constructor function for a class that receives data from a
* mat-dialog and passes it as a parameter to the component's construction.
* 
* @param { MatDialogRef } dialogRef - The `dialogRef` input parameter is a reference
* to the `MatDialogRef` object that represents the dialog container element.
* 
* @param { DialogData } data - The `data` input parameter is injected with the
* `DialogData` class via the `@Inject()` decorator.
*/
  constructor(
    public dialogRef: MatDialogRef<NoScatterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}


/**
* @description This is an Angular lifecycle hook method called `ngOnInit`. It is
* called after the component has been fully initialized and its views have been initialized.
*/
  ngOnInit() {}

/**
* @description This function calls the `close()` method of the `dialogRef` object
* when the user doesn't click on any element within the dialog.
* 
* @returns { void } The function `onNoClick()` does not return any value or statement.
*/
  onNoClick(): void {
    this.dialogRef.close();
  }
}


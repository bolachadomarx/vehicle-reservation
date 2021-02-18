import { Component, Inject, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-confirm-reservation-dialog',
  templateUrl: './confirm-reservation-dialog.component.html',
  styleUrls: ['./confirm-reservation-dialog.component.css'],
})
export class ConfirmReservationDialogComponent implements OnInit {
  reservationDate = new FormControl()
  title: string
  message: string
  constructor(
    public dialogRef: MatDialogRef<ConfirmReservationDialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { title: string; message: string; importantMessage: string }
  ) {
    this.title = data.title
    this.message = data.message
  }

  ngOnInit(): void {}

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(this.reservationDate.value)
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(null)
  }
}

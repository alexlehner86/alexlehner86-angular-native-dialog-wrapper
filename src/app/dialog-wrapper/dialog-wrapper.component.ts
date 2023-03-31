import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-dialog-wrapper',
    templateUrl: './dialog-wrapper.component.html',
    styleUrls: ['./dialog-wrapper.component.css']
})
export class DialogWrapperComponent {
    @ViewChild('dialog') dialogElementRef!: ElementRef<HTMLDialogElement>;

    public openDialog() {
        const dialogElement = this.dialogElementRef.nativeElement;
        dialogElement.showModal();
    }

    public closeDialog() {
        const dialogElement = this.dialogElementRef.nativeElement;
        dialogElement.close();
    }
}

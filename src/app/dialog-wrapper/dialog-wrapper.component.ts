import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
    selector: 'app-dialog-wrapper',
    templateUrl: './dialog-wrapper.component.html',
    styleUrls: ['./dialog-wrapper.component.css']
})
export class DialogWrapperComponent {
    @Output() public dialogClose = new EventEmitter<string>();

    @ViewChild('dialog') dialogElementRef!: ElementRef<HTMLDialogElement>;

    public openDialog() {
        const dialogElement = this.dialogElementRef.nativeElement;
        dialogElement.showModal();
        // Reset return value to default to remove possible return value from earlier interaction with the dialog.
        dialogElement.returnValue = '';
    }

    /**
     * Only intended for this component's internal use.
     */
    public _onClose(event: Event): void {
        const value = (event.target as HTMLDialogElement).returnValue;
        this.dialogClose.emit(value);
    }
}

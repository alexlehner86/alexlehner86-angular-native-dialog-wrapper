import { Component, ViewChild } from '@angular/core';

import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('simpleDialog') simpleDialogEl!: DialogWrapperComponent;
    @ViewChild('complexDialog') complexDialogEl!: DialogWrapperComponent;

    public simpleDialogAnswer: string | undefined;

    public openSimpleDialog(): void {
        this.simpleDialogEl.openDialog();
    }

    public onSimpleDialogClose(returnValue: string): void {
        if (returnValue) {
            this.simpleDialogAnswer = returnValue;
        }
    }

    public openComplexDialog(): void {
        this.complexDialogEl.openDialog();
    }
}

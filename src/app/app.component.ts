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

    public openSimpleDialog(): void {
        this.simpleDialogEl.openDialog();
    }

    public closeSimpleDialog(): void {
        this.simpleDialogEl.closeDialog();
    }

    public openComplexDialog(): void {
        this.complexDialogEl.openDialog();
    }
}

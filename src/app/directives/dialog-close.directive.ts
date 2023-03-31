import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[dialog-close], [dialogClose]',
    exportAs: 'dialogClose',
    host: {
        '(click)': 'onButtonClick($event)',
    },
})
export class DialogCloseDirective implements OnInit {
    /** Dialog close input. */
    @Input('dialog-close') dialogResult: any;

    private _dialogEl: HTMLDialogElement | null = null;
    private _isButton = false;

    constructor(
        private _elementRef: ElementRef<HTMLElement>,
    ) { }

    public ngOnInit(): void {
        this._isButton = this._elementRef.nativeElement.tagName === 'BUTTON';
        if (this._isButton) {
            this._dialogEl = this.getClosestDialog(this._elementRef);
        }
    }

    public onButtonClick() {
        if (this._isButton) {
            this._dialogEl?.close(this.dialogResult);
        }
    }

    /**
     * Finds the closest HTMLDialogElement to an element by looking at the DOM.
     * @param element Element relative to which to look for a dialog.
     */
    private getClosestDialog(element: ElementRef<HTMLElement>) {
        let parent: HTMLElement | null = element.nativeElement.parentElement;

        while (parent && !(parent.tagName === 'DIALOG')) {
            parent = parent.parentElement;
        }

        return parent as HTMLDialogElement ?? null;
    }
}

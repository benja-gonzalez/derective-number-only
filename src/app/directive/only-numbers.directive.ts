import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: 'input[onlyNumbers]'
})
export class OnlyNumbersDirective {

	constructor(private readonly elRef: ElementRef) { }

	@HostListener('input', ['$event'])
	onChangeInputt(event: Event): void {
		// console.log({elRef: this.elRef.nativeElement.value});

		const regEx = /[^0-9]*/g;

		const valueInitial = this.elRef.nativeElement.value;
		this.elRef.nativeElement.value = valueInitial.replace(regEx, '');

		if (valueInitial !== this.elRef.nativeElement.value) {
			event.stopPropagation();
		}

	}

}

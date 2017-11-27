import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[pkmn-shadow-card]' })
export class ShadowCardDirective {
    constructor(el: ElementRef, renderer: Renderer) {
       this.setBorder('#f5f5f5');
       this.setHeight('180px');
    }

    private setBorder(color: string) {
        let style = 'solid 4px ' + color;
        this.renderer.setElementStyle(this.el.nativeElement, 'border', style);
    }

    private setHeight(height: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'height', height);
    }

}

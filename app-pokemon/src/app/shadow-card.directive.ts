import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({ selector: '[appShadowCard]' })
export class ShadowCardDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
       this.setBorder('#f5f5f5');
//       this.setHeight('180px');
    }

    private setBorder(color: string) {
        const style = 'solid 1px ' + color;
        this.renderer.setElementStyle(this.el.nativeElement, 'border', style);
    }

    private setHeight(height: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'height', height);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder('rgba(0, 0, 0, 0.125)');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder('rgba(0, 0, 0, 0.125)');
    }

}

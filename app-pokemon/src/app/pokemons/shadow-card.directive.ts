import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({ selector: '[appShadowCard]' })
export class ShadowCardDirective {

    borderSizeOri = '1px';
    borderColorOri = 'rgba(0, 0, 0, 0.125)';
    space = ' ';

    constructor(private el: ElementRef, private renderer: Renderer) {
      this.setBorder(this.borderSizeOri, this.borderColorOri);
    }

    private setBorder(size: string, color: string) {
      const style = 'solid' + this.space + size + this.space + color;
        this.renderer.setElementStyle(this.el.nativeElement, 'border', style);
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder('1px', 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.setBorder(this.borderSizeOri, this.borderColorOri);
    }

}

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appJobCard]'
})
export class JobCardDirective implements OnInit {
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor = '#e1e1e2'; 
    this.el.nativeElement.style.padding = '20px 20px';
    this.el.nativeElement.style.margin = '20px 0';
    this.el.nativeElement.style.color = '#f96f6c';
    this.el.nativeElement.style.border = 'solid 2px #f96f6c';
  }
}

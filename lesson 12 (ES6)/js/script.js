window.addEventListener('DOMContentLoaded', function () {

    'use strict';
 
   class Options {
       constructor (heigth, width, bg, fontSize, textAlign) {
           this.heigth = heigth;
           this.width = width;
           this.bg = bg;
           this.fontSize = fontSize;
           this.textAlign = textAlign;
       }

       creteDiv() {
           let elemet = document.createElement('div');
           document.body.appendChild(elemet);
           elemet.textContent = 'I was here!';
           let param = `height:${this.heigth}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign};`;
           elemet.style.cssText = param;
       }
   }
   const item = new Options(300, 300, 'green', 50, 'center');
   item.creteDiv();

});
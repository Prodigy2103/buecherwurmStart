import { Component, inject, Renderer2, signal } from '@angular/core';

@Component({
  selector: 'section[actual]',
  imports: [],
  templateUrl: './actual.component.html',
  styleUrl: './actual.component.scss'
})
export class ActualComponent {
    // Signals für den Zustand des Modals
    isOpen = signal(false);
    
    // 💡 NEU: Speichert den Typ des anzuzeigenden Inhalts (Beispiel: 'div1', 'div2', etc.)
    // Passen Sie die Typen an alle Ihre möglichen Dialoge an, z.B. 'div1' | 'div2' | 'div3' | 'div4'
    contentKind = signal<'div1' | 'div2' | ''>(''); 
    
    // headlineTxt und submitBtnTxt sind nun überflüssig und können entfernt werden

    private renderer = inject(Renderer2);

    // Methode zum Öffnen des Modals, jetzt nur mit dem spezifischen Inhaltstyp
    openModal(kindOf: 'div1' | 'div2') { // Passen Sie die Typen hier an alle Grid-Elemente an
        // 1. Speichert den Typ
        this.contentKind.set(kindOf); 

        // 2. Öffnet das Modal
        this.isOpen.set(true); 
        this.renderer.addClass(document.body, 'modal-open-background');
    }

    closeModal() {
        // ... Logik zum Schließen (inkl. Verzögerung, falls CSS-Animation verwendet wird) ...
        this.isOpen.set(false);
        this.contentKind.set(''); // Setzt den Inhaltstyp zurück
        this.renderer.removeClass(document.body, 'modal-open-background');
    }
}

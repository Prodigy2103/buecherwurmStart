import { Component, inject, input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ModalService } from '../../service/modal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actual-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actual-modal.component.html',
  styleUrl: './actual-modal.component.scss',
  animations: [
    trigger('slideInOut', [
      state('open', style({
        transform: 'translateX(0)',
        opacity: 1,
      })),
      state('closed', style({
        transform: 'translateX(100vw)', 
        opacity: 0,
      })),
      transition('closed => open', [
        style({
        transform: 'translateX(100vw)', 
        opacity: 0, 
    }),
    animate('500ms ease-out')
      ]),
      transition('open => closed', [
        animate('400ms ease-in')
      ])
    ])
  ]
})
export class ContentModalComponent implements OnInit {
  // Wir verwenden hier KEIN Signal, da der State schnell von geschlosssen zu offen wechseln muss
  animationState: 'open' | 'closed' = 'closed'; 
  
  private modalService = inject(ModalService);
  contentKind = input<'div1' | 'div2' | ''>(''); 
  dissolve: (() => void) | undefined; 

  /**
   * Setzt den Animationszustand beim Initialisieren der Komponente auf 'open'.
   */
  ngOnInit(): void {
    // Startet die "closed => open" Transition
    this.animationState = 'open'; 
  }

  /**
   * Schließt das Modal.
   * 1. Setzt den Zustand auf 'closed', um die Animation zu starten.
   * 2. Wartet die Dauer der Schließen-Animation ab.
   * 3. Ruft die dissolve-Funktion auf, um die Komponente zu zerstören.
   */
  closeModal() {
    this.animationState = 'closed'; // Startet die "open => closed" Transition

    // WICHTIG: Wir müssen die Komponente erst nach Abschluss der Animation zerstören.
    // Die Dauer der 'open => closed' Transition ist 400ms.
    setTimeout(() => {
        if (this.dissolve) {
          this.dissolve();
        }
    }, 400); 
  }
}

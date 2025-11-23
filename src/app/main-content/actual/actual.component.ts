import { Component, inject, Renderer2, signal } from '@angular/core';
import { ModalService } from '../../shared/service/modal.service';

@Component({
    selector: 'section[actual]',
    standalone: true, 
    imports: [], 
    templateUrl: './actual.component.html',
    styleUrl: './actual.component.scss'
})
export class ActualComponent {
    private modalService = inject(ModalService);

    openModal(kindOf: 'div1' | 'div2') {
        this.modalService.openContentModal(kindOf);
    }
}

import { ApplicationRef, createComponent, inject, Injectable, Injector } from '@angular/core';
import { ContentModalComponent } from '../../shared/modal/actual-modal/actual-modal.component';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    private appRef: ApplicationRef = inject(ApplicationRef);
    private injector: Injector = inject(Injector);

    openContentModal(kindOf: 'div1' | 'div2') {
        
        const componentRef = createComponent(ContentModalComponent, {
            environmentInjector: this.appRef.injector,
            elementInjector: this.injector
        });

        componentRef.setInput('contentKind', kindOf);

        componentRef.instance.dissolve = () => {
            this.appRef.detachView(componentRef.hostView);
            componentRef.destroy();
            
            document.body.classList.remove('modal-open-background');
        };

        document.body.classList.add('modal-open-background');

        this.appRef.attachView(componentRef.hostView);
        document.body.appendChild(componentRef.location.nativeElement);
    }
}
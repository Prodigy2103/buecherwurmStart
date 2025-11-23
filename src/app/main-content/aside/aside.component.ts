import { Component, effect, inject, Input, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { SectionType } from '../,,/../../shared/enum/section-type';
import { CommonModule } from '@angular/common';
// import { ModalService } from '../../shared/service/modal.service';
import { NavItemComponent } from '../../shared/nav-item/nav-item.component';

/**
 * Represents a navigation item in the sidebar.
 */
export interface NavItemData {
      /** Unique section identifier */
      sectionId: string;
      /** Display title of the section */
      title: string;
      /** Path to the section icon */
      imagePath: string;
      /** Type of the section (enum) */
      section: SectionType;
      /** Indicates whether the section is currently active */
      active: boolean;
}

@Component({
      selector: 'app-aside',
      imports: [CommonModule, NavItemComponent],
      templateUrl: './aside.component.html',
      styleUrl: './aside.component.scss'
})
export class AsideComponent {
      //#region Attributes

      currentSection: InputSignal<SectionType> = input.required<SectionType>();
      selectedSection: OutputEmitterRef<SectionType> = output<SectionType>();

      /** List of main navigation items displayed in the sidebar */
      protected items: NavItemData[] = [
            {
                  sectionId: 'Home',
                  title: 'Startseite',
                  imagePath: 'assets/icon/icons8-startseite.gif',
                  section: SectionType.HOME,
                  active: false
            },
            {
                  sectionId: 'Actual',
                  title: 'Aktuelles',
                  imagePath: 'assets/icon/aktuelle-nachrichten.png',
                  section: SectionType.ACTUAL,
                  active: false
            },
            {
                  sectionId: 'Allday',
                  title: 'Alltag im Bücherwurm',
                  imagePath: 'assets/icon/schule.png',
                  section: SectionType.ALLDAY,
                  active: false
            },
            {
                  sectionId: 'Termin',
                  title: 'Termine',
                  imagePath: 'assets/icon/termin.png',
                  section: SectionType.TERMIN,
                  active: false
            },
            {
                  sectionId: 'Formular',
                  title: 'Formularservice',
                  imagePath: 'assets/icon/kontakt-formular.png',
                  section: SectionType.FORMULAR,
                  active: false
            },
            {
                  sectionId: 'Schoolstart',
                  title: 'Schulstart',
                  imagePath: 'assets/icon/glucklich.png',
                  section: SectionType.SCHOOLSTART,
                  active: false
            },
            {
                  sectionId: 'Dayoffer',
                  title: 'Ganztagsangebot',
                  imagePath: 'assets/icon/betreuung.png',
                  section: SectionType.DAYOFFER,
                  active: false
            },
            {
                  sectionId: 'Round',
                  title: 'Rundgang',
                  imagePath: 'assets/icon/virtueller-rundgang.png',
                  section: SectionType.ROUND,
                  active: false
            },
            {
                  sectionId: 'Employ',
                  title: 'Förderverein',
                  imagePath: 'assets/img/65d4a38009b78@2x.png',
                  section: SectionType.EMPLOY,
                  active: false
            },
            {
                  sectionId: 'Schoolbook',
                  title: 'Schulbibliothek',
                  imagePath: 'assets/icon/bibliothek.png',
                  section: SectionType.SCHOOLBOOK,
                  active: false
            },
            {
                  sectionId: 'Classtwo',
                  title: 'Klasse 2000',
                  imagePath: 'assets/img/Sticker_ich_bin_Pate.png',
                  section: SectionType.CLASSTWO,
                  active: false
            },
            {
                  sectionId: 'Togetherlive',
                  title: 'Zusammenleben',
                  imagePath: 'assets/icon/icons8-zusammenarbeit-50.png',
                  section: SectionType.TOGETHERLIVE,
                  active: false
            },
            {
                  sectionId: 'Drive',
                  title: 'Schülerbeförderung',
                  imagePath: 'assets/icon/icons8-schulbus-64.png',
                  section: SectionType.DRIVE,
                  active: false
            }
      ];

      /** Service for handling modal dialogs */
      // protected modalService: ModalService = inject(ModalService);

      //#endregion

      constructor() {
            effect(() => this.checkSection());
      }

      //#region Methods

      /**
       * Activates a main navigation item and emits the selected section.
       * @param index Index of the selected navigation item
       */
      selectSection(index: number): void {
            this.items.forEach((item, i) => {
                  item.active = i === index;
            });
            this.selectedSection.emit(this.items[index].section);
      }

      private checkSection() {
            const section: SectionType = this.currentSection();
            this.items.forEach(item => {
                  item.active = false;
                  if (item.section == section) item.active = true;
            })
      }


      //#endregion
}

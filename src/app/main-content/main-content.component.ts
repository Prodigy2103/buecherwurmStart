import { Component } from '@angular/core';
import { SectionType } from '../shared/enum/section-type';
import { HeaderComponent } from '../shared/header/header.component';
import { AsideComponent } from '../main-content/aside/aside.component';
import { HomeComponent } from './home/home.component';
import { ActualComponent } from './actual/actual.component';

@Component({
  selector: 'app-main-content',
  imports: [ HeaderComponent, AsideComponent, HomeComponent, ActualComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

  protected readonly SectionType = SectionType;
  protected prevSection: SectionType = SectionType.HOME;
  protected currentSection: SectionType = SectionType.HOME;

  // #region Methods
  // #region Sectionns
  /**
   * Changes the section
   * @param section Section for change.
   */
  protected changeSection(newSection: SectionType) {
        
        // Fall 1: Zurück zum vorherigen Abschnitt
    if (newSection === SectionType.PREV_SECTION) {
        this.currentSection = this.prevSection;
    } 
    // Fall 2: Wechsel zu einem neuen, normalen Abschnitt
    else {
        // Der AKTUELLE Abschnitt wird als vorheriger Abschnitt gespeichert.
        this.prevSection = this.currentSection;
        
        // Der NEUE Abschnitt wird zum aktuellen Abschnitt.
        this.currentSection = newSection;
    }
    }
}

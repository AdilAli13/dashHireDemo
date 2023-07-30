import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { SideNavComponent } from '../side-nav/side-nav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private sideNavClicked: boolean = false;

  constructor(
    private sideNavComponent: SideNavComponent
  ) { }

  ngOnInit(): void {
  }

  buttonClick () {
      if(this.sideNavClicked === false) {
        this.sideNavComponent.openSideNav = true;
        this.sideNavClicked = true;
      }
      else if (this.sideNavClicked === true) {
        this.sideNavComponent.openSideNav = false;
        this.sideNavClicked = false;
      }
  }

}

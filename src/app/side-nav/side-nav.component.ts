import { Component, OnInit } from '@angular/core';
import { faHome , faUser, faPerson, faCartFlatbed,faDownload, faFilePdf, faCalendar, faRupeeSign, faColumns, faArrowDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  faDashboard = faHome;
  faUser = faUser;
  faPerson = faPerson;
  faCartFlatbed = faCartFlatbed;
  faDownload = faDownload;
  faFilePdf = faFilePdf;
  faCalendar = faCalendar;
  faRupee = faRupeeSign;
  faColumns = faColumns;
  faArrowDown = faArrowDown;

  public openSideNav: boolean = false;
  public isClicked: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.isClicked = this.openSideNav
  }
  
}

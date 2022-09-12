import { Component, OnInit, ViewChild } from "@angular/core";
import { IBreadCrumbItem } from "sp-components/src/app/Components/Molecules/breadcrumb/breadcrumb.component";
import { ICampaign, ICustomer, IGiftManagement } from "sp-components/src/app/Components/Organisms/card/card.component";
import { DialogsComponent } from "sp-components/src/app/Components/Organisms/dialogs/dialogs.component";
import { IUserData, ISidebar } from "sp-components/src/app/Components/Organisms/sidebar/sidebar.component";
import { IDataSet } from "sp-components/src/app/Components/Organisms/table/table.component";
import { UploadComponent } from "sp-components/src/app/Components/Organisms/upload/upload.component";
import { appHomeIcon } from "sp-components/src/app/svg/Action/home";
import { appRedeemIcon } from "sp-components/src/app/svg/Action/redeem";
import { appSettingsIcon } from "sp-components/src/app/svg/Action/settings";
import { appRecentActorsIcon } from "sp-components/src/app/svg/AV/recent_actors";
import { appSendIcon } from "sp-components/src/app/svg/Content/send";
import { appPlaceIcon } from "sp-components/src/app/svg/Maps/place";
import { appPeopleIcon } from "sp-components/src/app/svg/Social/people";

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.component.html',
  styleUrls: ['./organisms.component.less']
})
export class OrganismsComponent implements OnInit {
  @ViewChild(DialogsComponent) dialog?: DialogsComponent;
  @ViewChild(UploadComponent) upload?: UploadComponent;

  constructor() { }

  breadcrumbItems: IBreadCrumbItem[] = [];

  userData: IUserData = <IUserData>{};

  sideData: ISidebar = <ISidebar>{};
  sideDataMultiAccount: ISidebar = <ISidebar>{};

  dataSet: IDataSet[] = [];
  pagingDataSet: IDataSet[] = [];
  campaigns: ICampaign[];
  customers: ICustomer[];
  giftManagements: IGiftManagement[];

  dataRows: any;

  optionsData = [
      { title: 'Home', icon: appHomeIcon, isActive: true },
      { title: 'Customers', icon: appPeopleIcon, isActive: false },
      { title: 'EGift Management', icon: appRedeemIcon, isActive: false },
      { title: 'Locations', icon: appPlaceIcon, isActive: false },
      { title: 'Users', icon: appRecentActorsIcon, isActive: false },
      { title: 'Setup', icon: appSettingsIcon, isActive: false },
      { title: 'Campaigns', icon: appSendIcon, isActive: false }
    ];

  headerAction: () => void = ()  => {
    alert("action in header");
  };
  duplicateAction: () => void = () => {
    alert("duplicate");
  };
  deleteAction: () => void = () => {
    alert("delete");
  };
  cancelAction: () => void = () => {
    alert("Cancel");
  };
  goToGuestAction: () => void = () => {
    alert("Going to guest");
  };

  ngOnInit() {
    this.breadcrumbItems = this.getBreadcrumbsItems();
    this.userData = this.getUserData();
    this.sideData = this.getSideData();
    this.sideDataMultiAccount = this.getSideDataMultiAccount();
    this.dataSet = this.getDataSet();
    this.dataRows = this.getDataRows();
    this.campaigns = this.getCampaigns();
    this.customers = this.getCustomers();
    this.giftManagements = this.getGiftManagements();
  }
  getGiftManagements(): IGiftManagement[] {
    return [
      {
        type: 'giftManagement',
        id: '12126',
        name: 'Andres Mann',
        dateCreated: '01/11/20',
        deliverProcess: 'pending',
        email: 'alexmann@gmail.com',
        phone: '(123) 456-7890'
      }
    ]
  }
  getCustomers(): ICustomer[] {
    return [
      {
        id: 10000001,
        type: 'customer',
        first_name: 'Andres',
        last_name: 'Mann',
        date_created: 1393939168,
        isSelect: false,
        email: 'alexmann@gmail.com',
        phone: '(123) 456-7890'
      },
      {
        id: 10000002,
        type: 'customer',
        first_name: 'Andres',
        last_name: 'Mann',
        date_created: 1393939168,
        isSelect: true,
        email: 'alexmann@gmail.com',
        phone: '(123) 456-7890'
      },
      {
        id: 10000003,
        type: 'customer',
        first_name: 'Andres',
        last_name: 'Mann',
        date_created: 1393939168,
        isSelect: false,
        email: 'alexmann@gmail.com',
        phone: '(123) 456-7890'
      }
    ];
  }
  getCampaigns(): ICampaign[] {
    return [
      {
        id: 1,
        notification_template: {
            medium: {
              id: 1,
              name: "email"
            }
          },
        notification_template_id: 1,
        name: 'Sales',
        date_created: 1629320329,
        date_scheduled: null,
        date_updated: 1629320329,
        status: {
          id: 1
        },
        target_group_id: 1,
        // TODO: "metrics" is not originally on ICampaign, so will likely need to update this once stats API is sorted out
        metrics: [
          {
            type: 'Send',
            value: 10
          }, {
            type: 'Visit',
            value: 4
          }, {
            type: 'Open',
            value: 6
          }, {
            type: 'Spend',
            value: 40
          }
        ]
      }
    ]
  }

  getDataRows() {
    return [
    'Name',
    'Date',
    'Description',
    'Amount',
    'Status',
    'Invoice'
    ]
  }
  getDataSet(): IDataSet[] {
    return [
      {
        number: 3455,
        date: 'Jan 1, 2012',
        description: 'January Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      },
      {
        number: 4556,
        date: 'Dec 1, 2012',
        description: 'December Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      },
      {
        number: 2689,
        date: 'Nov 1, 2012',
        description: 'November Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      },
      {
        number: 2469,
        date: 'Oct 1, 2012',
        description: 'October Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      },
      {
        number: 3492,
        date: 'Sept 1, 2012',
        description: 'September Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      },
      {
        number: 1367,
        date: 'Aug 1, 2012',
        description: 'August Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      },
      {
        number: 9524,
        date: 'Jul 1, 2012',
        description: 'July Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      },
      {
        number: 4375,
        date: 'Jun 1, 2012',
        description: 'June Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      },
      {
        number: 3492,
        date: 'May 1, 2012',
        description: 'May Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      },
      {
        number: 1367,
        date: 'Apr 1, 2012',
        description: 'April Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      },
      {
        number: 9524,
        date: 'Mar 1, 2012',
        description: 'March Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      },
      {
        number: 4375,
        date: 'Feb 1, 2012',
        description: 'February Monthly Fees',
        amount: '$1200.00 CAD',
        status: true,
        invoice: 'PDF'
      }
    ];
  }

  getUserData(): IUserData {
    return {
      name: 'Alex Orekhvo',
      id: '12126',
      email: 'alexorekhvo1998@gmail.com',
      title: 'Brandins Breakfast',
      company: 'Bonanza'
    }
  }

  getSideData(): ISidebar {
    return {
      users: [
        {
          name: 'Alex Orekhvo',
          id: '12126',
          email: 'alexorekhvo1998@gmail.com',
          title: 'Brandins Breakfast',
          company: 'Bonanza'
        }
      ],
      logout: () => {alert("Logout")}
    }
  }
  getSideDataMultiAccount(): ISidebar {
    return {
      users: [
        {
          name: 'Alex Orekhvo',
          id: '12126',
          email: 'alexorekhvo1998@gmail.com',
          title: 'Brandins Breakfast',
          company: 'Bonanza'
        },
        {
          name: 'Emilia Mann',
          id: '20201',
          email: 'emiliamann@gmail.com',
          title: 'Brandins Dinner',
          company: 'Partner'
        },
        {
          name: 'Bruno Martinez',
          id: '30302',
          email: 'brunomartinez@gmail.com',
          title: 'Brandins Lunch',
          company: 'Partner'
        }
      ],
      logout: () => {alert("Logout")}
    }
  }

  getBreadcrumbsItems(): IBreadCrumbItem[] {
    return [
      { label: 'Item', route: '' },
      { label: 'Menu', route: '' }
    ];
  }

  createModal() {
    let dialog = {
      title: 'Dialog Header',
      content: 'Gravida condimentum amet mauris justo, non non, feugiat aliquam vitae. Massa nec neque elementum id vulputate neque dui commodo a.',
      action1: () => { alert('Action 1') },
      action2: () => { alert('Action 1') },
      action1Label: 'Action 1',
      action2Label: 'Action 2'
    }
    this.dialog.createModal(dialog);
  }

  createModalU() {
    let upload = {
      title: 'Upload',
      content: 'Gravida condimentum amet mauris justo, non non, feugiat aliquam vitae. Massa nec neque elementum id vulputate neque dui commodo a.',
      action1: () => { alert('Closing') },
      action1Label: 'Close',
    }
    this.upload.createModalUpload(upload);
  }


}


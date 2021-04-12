import { ISidebar } from './../Components/Organisms/sidebar/sidebar.component';
import { ICardType } from './../utils/enums';
import { IDataSet } from './../Components/Organisms/table/table.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IBreadCrumbItem } from '../Components/Molecules/breadcrumb/breadcrumb.component';
import { ChartType } from '../Components/Organisms/chart/chart.component';
import { DialogsComponent, IModal } from '../Components/Organisms/dialogs/dialogs.component';
import { UploadComponent, IUpload } from '../Components/Organisms/upload/upload.component';
import { IUserData } from '../Components/Organisms/sidebar/sidebar.component';
import { ICampaign, ICustomer, IGiftManagement } from '../Components/Organisms/card/card.component';

@Component({
  selector: 'app-organisms',
  templateUrl: './organisms.component.html',
  styleUrls: ['./organisms.component.less']
})
export class OrganismsComponent implements OnInit {
  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];
  type1: ChartType = ChartType.line;

  @ViewChild(DialogsComponent, { static: false }) dialog?: DialogsComponent;
  @ViewChild(UploadComponent, { static: false }) upload?: UploadComponent;

  constructor() { }

  breadcrumbItems: IBreadCrumbItem[] = [];

  userData: IUserData = <IUserData>{};

  sideData: ISidebar = <ISidebar>{};
  sideDataMultiAccount: ISidebar = <ISidebar>{};

  dataSet: IDataSet[] = [];

  campaigns: ICampaign[];
  customers: ICustomer[];
  giftManagements: IGiftManagement[];

  dataRows: any;

  headerAction: () => void = ()  => {
    alert("action in header");
  };
  optionAction: () => void = () => {
    alert("options");
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
        type: 'customer',
        name: 'Andres Mann',
        dateCreated: '01/11/20',
        isSelect: false,
        email: 'alexmann@gmail.com',
        phone: '(123) 456-7890'
      }
    ]
  }
  getCampaigns(): ICampaign[] {
    return [
          {
            type: 'campaign',
            title: 'Sales',
            targetGroup: 'Elders',
            plataform: 'sms',
            dateCreated: '04/04/20',
            isSend: true,
            sendCount: 10,
            openCount: 6,
            visitCount: 4,
            spendCount: 40
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
      }
    ]
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


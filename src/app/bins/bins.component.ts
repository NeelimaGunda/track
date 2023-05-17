import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainserviceService } from '../mainservice.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-bins',
  templateUrl: './bins.component.html',
  styleUrls: ['./bins.component.css']
})
export class BinsComponent {
  bodyHeight: any = 0;
  loader: boolean = false;
  // bin:any=[];
  bin: any =
    [{
      "Id": 64, "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "ADJUSTMENT",
      "Code": "W-11-0001",
      "Description": "",
      "Description2": "",
      "No": "W-11-0001",
      "Name": "W-11-0001",
      "Name2": "", "Ranking": 0,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 65,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "ADJUSTMENT",
      "Code": "W-11-0002",
      "Description": "",
      "Description2": "",
      "No": "W-11-0002",
      "Name": "W-11-0002",
      "Name2": "",
      "Ranking": 0,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "", "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 25,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0001",
      "Description": "",
      "Description2": "",
      "No": "W-05-0001",
      "Name": "W-05-0001",
      "Name2": "",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 26,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0002",
      "Description": "",
      "Description2": "",
      "No": "W-05-0002",
      "Name": "W-05-0002",
      "Name2": "",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 27,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0003",
      "Description": "",
      "Description2": "",
      "No": "W-05-0003",
      "Name": "W-05-0003",
      "Name2": "",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "", "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 28,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0004",
      "Description": "",
      "Description2": "",
      "No": "W-05-0004",
      "Name": "W-05-0004",
      "Name2": "",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 29,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0005",
      "Description": "",
      "Description2": "",
      "No": "W-05-0005",
      "Name": "W-05-0005",
      "Name2": "",
      "Ranking": 60,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 30,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0006",
      "Description": "",
      "Description2": "",
      "No": "W-05-0006",
      "Name": "W-05-0006",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 31,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0007",
      "Description": "",
      "Description2": "",
      "No": "W-05-0007",
      "Name": "W-05-0007",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 32,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0008",
      "Description": "",
      "Description2": "",
      "No": "W-05-0008",
      "Name": "W-05-0008",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 33,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0009",
      "Description": "",
      "Description2": "",
      "No": "W-05-0009",
      "Name": "W-05-0009",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 34,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0010",
      "Description": "",
      "Description2": "",
      "No": "W-05-0010",
      "Name": "W-05-0010",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 35,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0011",
      "Description": "",
      "Description2": "",
      "No": "W-05-0011",
      "Name": "W-05-0011",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 36,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0012",
      "Description": "",
      "Description2": "",
      "No": "W-05-0012",
      "Name": "W-05-0012",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 37,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0013",
      "Description": "",
      "Description2": "",
      "No": "W-05-0013",
      "Name": "W-05-0013",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 38,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0014",
      "Description": "",
      "Description2": "",
      "No": "W-05-0014",
      "Name": "W-05-0014",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 39,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0015",
      "Description": "",
      "Description2": "",
      "No": "W-05-0015",
      "Name": "W-05-0015",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 40,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0016",
      "Description": "",
      "Description2": "",
      "No": "W-05-0016",
      "Name": "W-05-0016",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00",
      "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    },
    {
      "Id": 41,
      "CompanyCode": "APNT",
      "StoreCode": "AJ0105",
      "ZoneCode": "BULK",
      "Code": "W-05-0017",
      "Description": "",
      "Description2": "",
      "No": "W-05-0017",
      "Name": "W-05-0017",
      "Name2": "",
      "Ranking": 50,
      "Cubage": 0.0000000000,
      "Weight": 0.0000000000,
      "ReceiveBin": true,
      "ShipBin": true,
      "PutAwayBin": true,
      "PickBin": true,
      "CrossDockBin": false,
      "MovementPermitted": false,
      "ItemCategoryCode": "",
      "Status": 0,
      "CreatedBy": "",
      "CreatedDate": "2023-04-26T16:29:01.855358+04:00", "UpdatedBy": "",
      "UpdatedDate": "2023-04-26T16:29:01.855358+04:00"
    }
    ];
  show = false;
  searchquery: any = "";
  constructor(private router: Router, private service: MainserviceService, private location: Location) {
    this.service.iMSBinsSub.next(this.bin);
    let height: any = document.getElementsByTagName('body')[0];
    console.log(height.offsetHeight);
    this.bodyHeight = height.offsetHeight;
    this.service.iMSBinsSub.subscribe((data: any) => {
      this.bin = data;
      // console.log(this.modules);
    });
    console.log(this.service.iMSBins);
    this.bin = this.service.iMSBins;
    this.searchquery= this.service.search;
  }
  ngOnInit() {
    if (this.bin.length == 0)
      this.fetchData();
    else
      console.log(this.bin);

  }
  // goBack(){
  //   this.location.back();
   
  // }
  fetchData() {
    console.log("Calling fetch data in app component");
    this.loader = true;
    this.service.fetchImsBins().subscribe((data: any) => {
      console.log("Finished fetching data in app component")
      this.service.iMSBinsSub.next(data);
      this.loader = false;
    }, (err) => {
      console.log(err);

    })

  }
}
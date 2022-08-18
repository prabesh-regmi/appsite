import { Component, OnInit,Input } from '@angular/core';
import * as XLSX from "xlsx";


@Component({
  selector: 'app-single-finance-summery',
  templateUrl: './single-finance-summery.component.html',
  styleUrls: ['./single-finance-summery.component.scss']
})
export class SingleFinanceSummeryComponent implements OnInit {
  @Input() data: any;
  @Input() handler: Function;
  from=null;
  to=null;  

  constructor() { }

  ngOnInit(): void {
  }
  title ="export-to-excel";
  fileName ="ExcelSheet.xlsx";

  exportexcel():void{
    let element =document.getElementById("exel-tabel");
    const ws:XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb:XLSX.WorkBook =XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb,ws,"Sheet1");
    XLSX.writeFile(wb,this.fileName);
    console.log(ws);
  }
}

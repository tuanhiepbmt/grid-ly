import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import "ag-grid-charts-enterprise";
import {
  ColDef,
  GridReadyEvent,
  RowGroupingDisplayType
} from "ag-grid-community";
import * as ConstantVariables from './app.constants';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public columnDefs: ColDef[] = [
    { field: "country", rowGroup: true, enableRowGroup: true, hide: true },
    { field: "year", rowGroup: true, enableRowGroup: true, hide: true },
    { field: "sport", enableRowGroup: true }
  ];
  public defaultColDef: ColDef = {
    flex: 1
  };
  public autoGroupColumnDef: ColDef = {
  };
  public rowGroupPanelShow: "always" | "onlyWhenGrouping" | "never" = "always";
  public groupDisplayType: RowGroupingDisplayType = "multipleColumns";
  public rowData: any[] = ConstantVariables.DATA;
  public themeClass: string =
    "ag-theme-quartz";

  constructor(private http: HttpClient) {}

  onGridReady(params: GridReadyEvent<any>) {
    console.log('ready')
  }
}

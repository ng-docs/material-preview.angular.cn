import {DataSource} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

/**
 * @title CDK table with a fixed layout.
 */
@Component({
  selector: 'cdk-table-fixed-layout-example',
  styleUrls: ['cdk-table-fixed-layout-example.css'],
  templateUrl: 'cdk-table-fixed-layout-example.html',
  standalone: true,
  imports: [CdkTableModule],
})
export class CdkTableFixedLayoutExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new ExampleDataSource();
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 *
 * 一个数据源，用来提供应在表中渲染的数据。请注意，数据源可以以任何方式检索其数据。在这种情况下，数据源提供了对公共数据库 ExampleDatabase 的引用。管理底层数据不是数据源的责任。相反，它只需要获取数据并将应该渲染的内容准确地发送到表中。
 *
 */
export class ExampleDataSource extends DataSource<PeriodicElement> {
  /**
   * Stream of data that is provided to the table.
   *
   * 提供给此表格的数据流。
   *
   */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /**
   * Connect function called by the table to retrieve one stream containing the data to render.
   *
   * 供此表格调用的连接函数，用于检索包含要渲染的数据的一个流。
   *
   */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}

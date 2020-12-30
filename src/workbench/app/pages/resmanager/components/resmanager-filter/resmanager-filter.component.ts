import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { OrderCondition } from "@workbench/types/typing";

@Component({
  selector: "resmanager-filter",
  templateUrl: "./resmanager-filter.component.html",
  styleUrls: ["./resmanager-filter.component.scss"],
})
export class ResmanagerFilterComponent implements OnInit {
  @Input() orderConditions: OrderCondition[];

  orderValue: OrderCondition;

  searchValue: string;

  @Output() handleOrder: EventEmitter<any> = new EventEmitter();
  @Output() handleSearch: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  order() {
    this.handleOrder.emit(this.orderValue);
  }

  search() {
    this.handleSearch.emit(this.searchValue);
  }
}

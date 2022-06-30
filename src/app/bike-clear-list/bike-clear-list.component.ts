import { Component, OnInit } from '@angular/core';
import {BikeClear} from "../bike-clear";
import {BikeClearService} from "../bike-clear.service";

@Component({
  selector: 'app-bike-clear-list',
  templateUrl: './bike-clear-list.component.html',
  styleUrls: ['./bike-clear-list.component.css']
})
export class BikeClearListComponent implements OnInit {

  bikeclears: BikeClear[] = [];

  constructor(public bikeClearService : BikeClearService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.bikeClearService.getAll().subscribe(
      data => this.bikeclears = data
    )
  }

  delete(id: number) {
    this.bikeClearService.delete(id).subscribe(
      () => this.getAll()
    )
  }

}

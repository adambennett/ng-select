import { Component, OnInit } from '@angular/core';
import { DataService, Person } from '../data.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { NgSelectComponent } from '@ng-select/ng-select';

@Component({
	selector: 'ng-data-source-backend-example',
	templateUrl: './data-source-backend-example.component.html',
	styleUrls: ['./data-source-backend-example.component.scss'],
	imports: [NgSelectComponent, FormsModule, AsyncPipe],
})
export class DataSourceBackendExampleComponent implements OnInit {
	people$: Observable<Person[]>;
	selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';

	constructor(private dataService: DataService) {}

	ngOnInit() {
		this.people$ = this.dataService.getPeople();
	}
}

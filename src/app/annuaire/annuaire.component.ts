import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { Customer } from '../interfaces/customer';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { RegionEnum } from '../enum/region-enum';
import {
  AsyncPipe,
  KeyValuePipe,
  NgIf,
  NgOptimizedImage,
} from '@angular/common';
import { JOB_DISPLAY } from '../enum/job-mapping';
import { JobsEnum } from '../enum/jobs-enum';
import { MatIcon } from '@angular/material/icon';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
} from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../interfaces/project';
import { MatTooltip } from '@angular/material/tooltip';
import { IconsCardComponent } from '../icons-card/icons-card.component';

@Component({
  selector: 'app-annuaire',
  imports: [],
  templateUrl: './annuaire.component.html',
  styleUrl: './annuaire.component.css',
  standalone: true,
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic',
      },
    },
  ],
})
export class AnnuaireComponent implements OnInit {
  protected readonly RegionEnum = RegionEnum;
  protected readonly JOB_DISPLAY = JOB_DISPLAY;
  protected readonly JobsEnum = JobsEnum;
  customers: Customer[] = [];
  jobSelected = '';
  regionSelected = '';
  filteredJobs: Observable<string[]> | undefined;
  jobArray = Object.values(JobsEnum);
  myControl = new FormControl('');
  projects: Project[] = [];

  constructor(
    private customersService: CustomersService,
    private projectService: ProjectsService,
  ) {}

  ngOnInit(): void {
    this.customers = [];
    this.projects = this.projectService.getProjects();
    this.filteredJobs = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.jobArray.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }

  onInputChange(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;

    if (inputValue === '') {
      this.jobSelected = '';
    }
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent): void {
    console.log(event);
    this.jobSelected = event.option.value;
  }

  get regionEnumKeys(): string[] {
    return Object.keys(this.RegionEnum);
  }

  get regionEnumValues(): string[] {
    return Object.values(this.RegionEnum);
  }

  get jobEnumKeys(): string[] {
    return Object.keys(this.JobsEnum);
  }

  get jobEnumValues(): string[] {
    return Object.values(this.JobsEnum);
  }

  getMetierDisplay(job: string, sexe: 'masculin' | 'feminin'): string {
    return JOB_DISPLAY[job as keyof typeof JOB_DISPLAY][sexe];
  }
}

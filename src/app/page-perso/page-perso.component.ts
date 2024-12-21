import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment.ts';
import { HttpClient } from '@angular/common/http';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {
  Customer,
  mapCustomerToDTO,
  mapDtoToCustomer,
} from '../interfaces/customer';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDivider } from '@angular/material/divider';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {
  MatChipGrid,
  MatChipRow,
  MatChipsModule,
} from '@angular/material/chips';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import {
  MatAutocomplete,
  MatAutocompleteSelectedEvent,
  MatAutocompleteTrigger,
  MatOption,
} from '@angular/material/autocomplete';
import { JobsEnum } from '../enum/jobs-enum';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { SexeEnum } from '../enum/sexe-enum';
import { RegionEnum } from '../enum/region-enum';
import { CustomersService } from '../services/customers.service';

@Component({
  selector: 'app-page-perso',
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatChipGrid,
    MatChipRow,
    MatIcon,
    FormsModule,
    MatOption,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    MatInput,
    MatAutocompleteTrigger,
    MatAutocomplete,
    MatInputModule,
    MatSelect,
    AsyncPipe,
  ],
  templateUrl: './page-perso.component.html',
  standalone: true,
  styleUrl: './page-perso.component.css',
})
export class PagePersoComponent implements OnInit {
  customerForm!: FormGroup;
  userName: string | null = null;
  customerData: Customer | null = null;
  readonly announcer = inject(LiveAnnouncer);
  sexeKeysArray = Object.keys(SexeEnum);
  sexeValuesArray = Object.values(SexeEnum);
  jobsKeysArray = Object.keys(JobsEnum);
  jobsValuesArray = Object.values(JobsEnum);
  jobs: WritableSignal<string[]> = signal([]);
  jobControl = new FormControl([]);
  filteredOptions: Observable<string[]>;
  @ViewChild('inputJob') inputJob: ElementRef<HTMLInputElement>;
  regionsKeysArray = Object.keys(RegionEnum);
  regionsValuesArray = Object.values(RegionEnum);
  regionSignal: WritableSignal<string[]> = signal([]);
  regionControl = new FormControl([]);
  filteredOptionsRegions: Observable<string[]>;
  @ViewChild('inputRegion') inputRegion: ElementRef<HTMLInputElement>;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private customersService: CustomersService,
  ) {}

  ngOnInit() {
    this.filteredOptions = this.jobControl.valueChanges.pipe(
      startWith(''),
      map((value): string[] => {
        return value
          ? this._filter(value as string)
          : this.jobsValuesArray.slice();
      }),
    );

    this.filteredOptionsRegions = this.regionControl.valueChanges.pipe(
      startWith(''),
      map((value): string[] => {
        return value
          ? this._filterRegion(value as string)
          : this.regionsValuesArray.slice();
      }),
    );

    this.route.paramMap.subscribe((params) => {
      this.userName = params.get('userName');
    });
    this.http.get(environment.apiURL + '/user/hello').subscribe({
      next: (data) => {
        this.customerData = mapDtoToCustomer(data);
        console.log(this.customerData);
        this.initializeForm();
        this.jobs = signal(this.customerData.jobTitle);
        this.regionSignal = signal(this.customerData.regions);
      },
      error: (e) => console.error(e),
    });
  }

  private _filter(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.jobsValuesArray.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }

  private _filterRegion(name: string): string[] {
    const filterValue = name.toLowerCase();

    return this.regionsValuesArray.filter((option) =>
      option.toLowerCase().includes(filterValue),
    );
  }

  initializeForm() {
    console.log(this.customerData);
    if (this.customerData !== null) {
      this.customerForm = this.fb.group({
        id: [{ value: this.customerData.id, disabled: true }],
        firstname: [this.customerData.firstname],
        lastname: [this.customerData.lastname],
        sexe: [this.customerData.sexe],
        jobTitle: [this.customerData.jobTitle],
        phone: [this.customerData.phone],
        email: [this.customerData.email],
        imgProfil: [this.customerData.imgProfil],
        regions: this.fb.array(this.customerData.regions || []),
        inscriptionDate: [
          { value: this.customerData.inscriptionDate, disabled: true },
        ],
        isPremium: [this.customerData.isPremium],
      });
    }
  }

  onSubmit(): void {
    console.log('ihihihih');
    if (this.customerForm.valid) {
      this.jobs().forEach((job) => {
        if (!this.customerForm.value.jobTitle.includes(job)) {
          this.customerForm.value.jobTitle.push(job);
        }
      });

      this.regionSignal().forEach((region) => {
        if (!this.customerForm.value.regions.includes(region)) {
          this.customerForm.value.regions.push(region);
        }
      });
      //console.log('Form Data:', this.customerForm.value);
      console.log('titi');
      const dto = mapCustomerToDTO(this.customerForm.value);
      console.log(dto);
      this.customersService
        .updateCustomer(mapCustomerToDTO(this.customerForm.value))
        .subscribe({
          next: (data) => {
            console.log(data);
          },
          error: (e) => console.error(e),
        });
    } else {
      console.log('ohohoh');
    }
  }

  removeJob(job: string) {
    const jobsArray = this.jobs();
    const index = jobsArray.indexOf(job);
    if (index >= 0) {
      jobsArray.splice(index, 1);
      this.announcer.announce(`removed ${job} from reactive form`);
      this.jobs.set(jobsArray);
    }
  }

  removeRegion(region: string) {
    const regionsArray = this.regionSignal();
    const index = regionsArray.indexOf(region);
    if (index >= 0) {
      regionsArray.splice(index, 1);
      this.announcer.announce(`removed ${region} from reactive form`);
      this.regionSignal.set(regionsArray);
    }
  }

  selectedJob(event: MatAutocompleteSelectedEvent): void {
    this.jobs.update((jobs) => [
      ...jobs,
      this.jobsKeysArray[this.jobsValuesArray.indexOf(event.option.value)],
    ]);
    this.inputJob.nativeElement.value = '';
    event.option.deselect();
  }

  selectedRegion(event: MatAutocompleteSelectedEvent): void {
    this.regionSignal.update((regions) => [
      ...regions,
      this.regionsKeysArray[
        this.regionsValuesArray.indexOf(event.option.value)
      ],
    ]);
    this.inputRegion.nativeElement.value = '';
    event.option.deselect();
  }
}

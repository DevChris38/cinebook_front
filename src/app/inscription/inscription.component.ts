import {
  Component,
  effect,
  ElementRef,
  inject,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../environments/environment.ts';
import { HttpClient } from '@angular/common/http';
import { map, Observable, startWith } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import {
  Customer,
  DTOCustomerCreation,
  mapCustomerToDTO,
  mapCustomerToDTOCustomerCreation,
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
import { Project } from '../interfaces/project';
import { ImageCroppedEvent, ImageCropperComponent } from 'ngx-image-cropper';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FirebaseStorageService } from '../services/firebase-storage.service';

@Component({
  selector: 'app-inscription',
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
    ImageCropperComponent,
  ],
  templateUrl: './inscription.component.html',
  standalone: true,
  styleUrl: './inscription.component.css',
})
export class InscriptionComponent implements OnInit {
  customerForm!: FormGroup;
  userName: string | null = null;
  customerData: DTOCustomerCreation;
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
  imageChangedEvent: Event | null = null;
  croppedImage: SafeUrl = '';
  firebaseStorage = inject(FirebaseStorageService);
  photoPortraitBlob: Blob = new Blob();
  uploadedPhotoPortrait = signal('');
  photoPortraitIsLoaded = signal(false);
  hide = true;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private fb: FormBuilder,
    private customersService: CustomersService,
    private sanitizer: DomSanitizer,
    private router: Router,
  ) {
    effect(() => {
      if (this.uploadedPhotoPortrait().length !== 0) {
        console.log(this.uploadedPhotoPortrait());
        this.customerForm.value.imgProfil = this.uploadedPhotoPortrait();
      }
    });
  }

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
    this.customerData = {
      firstname: null,
      lastname: null,
      username: null,
      password: null,
      sexe: null,
      jobs: null,
      phone: null,
      email: null,
      imgProfil: null,
      regions: null,
      projets: null,
    };
    this.initializeForm();
  }

  fileChangeEvent(event: Event): void {
    console.log(event);
    this.imageChangedEvent = event;
    this.photoPortraitIsLoaded.set(true);
  }

  photoPortraitCropped(event: ImageCroppedEvent) {
    console.log(event);
    if (event.objectUrl != null) {
      console.log(event.objectUrl);
      this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(
        event.objectUrl,
      );
      console.log(this.croppedImage);
    }
    // event.blob can be used to upload the cropped image
    if (event.blob) {
      this.photoPortraitBlob = event.blob;
      console.log(this.photoPortraitBlob);
    }
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
    if (this.customerData !== null) {
      this.customerForm = this.fb.group({
        firstname: [this.customerData.firstname],
        lastname: [this.customerData.lastname],
        username: [this.customerData.username],
        password: [this.customerData.password],
        sexe: [this.customerData.sexe],
        jobTitle: this.fb.array(this.customerData.jobs || []),
        phone: [this.customerData.phone],
        email: [this.customerData.email],
        imgProfil: [this.customerData.imgProfil],
        regions: this.fb.array(this.customerData.regions || []),
      });
    }
  }

  onSubmit(): void {
    if (this.customerForm.valid) {
      this.firebaseStorage
        .uploadFile(this.photoPortraitBlob)
        .subscribe((value) => {
          this.uploadedPhotoPortrait.set(value);
          this.customerForm.value.imgProfil = this.uploadedPhotoPortrait();

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
          this.customersService
            .createCustomer(
              mapCustomerToDTOCustomerCreation(this.customerForm.value),
            )
            .subscribe({
              next: (data) => {
                console.log(data);
                this.router.navigate(['/login']);
              },
              error: (e) => console.error(e),
            });
        });
    } else {
      console.log(this.customerForm);
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

  get usernameInput() {
    return this.customerForm.get('username');
  }

  get passwordInput() {
    return this.customerForm.get('password');
  }
}

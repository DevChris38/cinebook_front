import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { Customer } from '../interfaces/customer';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { RegionEnum } from '../enum/region-enum';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-annuaire',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, KeyValuePipe],
  templateUrl: './annuaire.component.html',
  styleUrl: './annuaire.component.css',
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
  customers: Customer[] = [];
  jobSelected = '';
  regionSelected = '';

  constructor(private customersService: CustomersService) {}

  ngOnInit(): void {
    this.customers = this.customersService.getProfessionals();
  }

  get regionEnumKeys(): string[] {
    return Object.keys(this.RegionEnum);
  }

  get regionEnumValues(): string[] {
    return Object.values(this.RegionEnum);
  }
}

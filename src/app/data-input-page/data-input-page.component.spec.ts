import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInputPageComponent } from './data-input-page.component';

describe('DataInputPageComponent', () => {
  let component: DataInputPageComponent;
  let fixture: ComponentFixture<DataInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataInputPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DataInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

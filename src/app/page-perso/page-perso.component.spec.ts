import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePersoComponent } from './page-perso.component';

describe('PagePersoComponent', () => {
  let component: PagePersoComponent;
  let fixture: ComponentFixture<PagePersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePersoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

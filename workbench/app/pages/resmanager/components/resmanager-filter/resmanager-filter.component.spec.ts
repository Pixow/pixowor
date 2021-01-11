import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResmanagerFilterComponent } from './resmanager-filter.component';

describe('ResmanagerFilterComponent', () => {
  let component: ResmanagerFilterComponent;
  let fixture: ComponentFixture<ResmanagerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResmanagerFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResmanagerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

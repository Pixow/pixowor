import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResmanagerTabsComponent } from './resmanager-tabs.component';

describe('ResmanagerTabsComponent', () => {
  let component: ResmanagerTabsComponent;
  let fixture: ComponentFixture<ResmanagerTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResmanagerTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResmanagerTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

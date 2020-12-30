import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateGameItemComponent } from './template-game-item.component';

describe('TemplateGameItemComponent', () => {
  let component: TemplateGameItemComponent;
  let fixture: ComponentFixture<TemplateGameItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateGameItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateGameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

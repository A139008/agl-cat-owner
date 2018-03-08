import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatOwnerComponent } from './cat-owner.component';

describe('CatOwnerComponent', () => {
  let component: CatOwnerComponent;
  let fixture: ComponentFixture<CatOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

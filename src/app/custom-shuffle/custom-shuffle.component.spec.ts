import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomShuffleComponent } from './custom-shuffle.component';

describe('CustomShuffleComponent', () => {
  let component: CustomShuffleComponent;
  let fixture: ComponentFixture<CustomShuffleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomShuffleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomShuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

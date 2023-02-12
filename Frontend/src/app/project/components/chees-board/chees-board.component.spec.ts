import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheesBoardComponent } from './chees-board.component';

describe('CheesBoardComponent', () => {
  let component: CheesBoardComponent;
  let fixture: ComponentFixture<CheesBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheesBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheesBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

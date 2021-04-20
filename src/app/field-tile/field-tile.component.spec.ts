import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTileComponent } from './field-tile.component';

describe('FieldTileComponent', () => {
  let component: FieldTileComponent;
  let fixture: ComponentFixture<FieldTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

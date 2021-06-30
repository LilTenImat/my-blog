import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionBlocksComponent } from './description-blocks.component';

describe('DescriptionBlocksComponent', () => {
  let component: DescriptionBlocksComponent;
  let fixture: ComponentFixture<DescriptionBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

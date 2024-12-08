import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCollectionComponent } from './top-collection.component';

describe('TopCollectionComponent', () => {
  let component: TopCollectionComponent;
  let fixture: ComponentFixture<TopCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCollectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTopicsComponent } from './card-topics.component';

describe('CardTopicsComponent', () => {
  let component: CardTopicsComponent;
  let fixture: ComponentFixture<CardTopicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardTopicsComponent]
    });
    fixture = TestBed.createComponent(CardTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { Component, Input } from '@angular/core';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


@Component({
  selector: 'app-search',
  template: ''
})
class MockSearchComponent { }

@Component({
  selector: 'app-filter',
  template: ''
})
class MockFilterComponent { }

@Component({
  selector: 'app-list',
  template: ''
})
class MockListComponent { @Input() drinkList; }

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent, MockSearchComponent, MockListComponent, MockFilterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

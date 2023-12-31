import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopWidgetComponent } from './top-widget.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
describe('TopWidgetComponent', () => {
  let component: TopWidgetComponent;
  let fixture: ComponentFixture<TopWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

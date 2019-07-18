import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLosPostComponent } from './todos-los-post.component';

describe('TodosLosPostComponent', () => {
  let component: TodosLosPostComponent;
  let fixture: ComponentFixture<TodosLosPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosLosPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosLosPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

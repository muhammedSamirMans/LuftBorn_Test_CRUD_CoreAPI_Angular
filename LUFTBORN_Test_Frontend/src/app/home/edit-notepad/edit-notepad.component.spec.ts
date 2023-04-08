import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNotepadComponent } from './edit-notepad.component';

describe('AddEditNotepadComponent', () => {
  let component: AddEditNotepadComponent;
  let fixture: ComponentFixture<AddEditNotepadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNotepadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditNotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

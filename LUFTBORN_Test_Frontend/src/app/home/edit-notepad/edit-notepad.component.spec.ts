import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNotepadComponent } from './edit-notepad.component';

describe('AddEditNotepadComponent', () => {
  let component: EditNotepadComponent;
  let fixture: ComponentFixture<EditNotepadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNotepadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditNotepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

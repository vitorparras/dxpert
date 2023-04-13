import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaAlterarDialogComponent } from './senha-alterar-dialog.component';

describe('SenhaAlterarDialogComponent', () => {
  let component: SenhaAlterarDialogComponent;
  let fixture: ComponentFixture<SenhaAlterarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenhaAlterarDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenhaAlterarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

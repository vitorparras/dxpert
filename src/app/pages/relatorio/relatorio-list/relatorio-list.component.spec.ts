import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioListComponent } from './relatorio-list.component';

describe('RelatorioListComponent', () => {
  let component: RelatorioListComponent;
  let fixture: ComponentFixture<RelatorioListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatorioListComponent]
    });
    fixture = TestBed.createComponent(RelatorioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

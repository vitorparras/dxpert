import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioGeradoSucessoComponent } from './relatorio-gerado-sucesso.component';

describe('RelatorioGeradoSucessoComponent', () => {
  let component: RelatorioGeradoSucessoComponent;
  let fixture: ComponentFixture<RelatorioGeradoSucessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatorioGeradoSucessoComponent]
    });
    fixture = TestBed.createComponent(RelatorioGeradoSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

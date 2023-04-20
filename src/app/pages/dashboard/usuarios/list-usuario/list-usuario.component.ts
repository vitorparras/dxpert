import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { localStorageVarNames } from 'src/environments/localStorageVarNames';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css'],
})
export class ListUsuarioComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  get selectedUserId(): number {
    return this._selectedUserId;
  }

  set selectedUserId(value: number) {
    this._selectedUserId = value;
  }

  private _selectedUserId: number = 0;

  ngOnInit() {
    this.reloadUser();
  }

  reloadUser() {
    this.selectedUserId =
      parseInt(localStorage.getItem(localStorageVarNames.IdUser) ?? '') ?? 0;
  }
}

// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

// Create a row object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert the row and get new row ID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row by adding age using spread syntax
const updatedRow: RowElement = { ...row, age: 23 };

// Update the row in "database"
CRUD.updateRow(newRowID, updatedRow);

// Delete the row
CRUD.deleteRow(newRowID);

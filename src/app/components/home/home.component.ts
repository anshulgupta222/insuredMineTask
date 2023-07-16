import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, startWith, switchMap } from 'rxjs';
import { User } from 'src/app/Models/user';
import { usersDB } from 'src/app/dbData';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
autocompleteControl : any | undefined = new FormControl();
filteredItems: Observable<User[]> | undefined;

ngOnInit(): void {
  this.filteredItems = this.autocompleteControl.valueChanges.pipe(
    startWith(''),
    switchMap(value => {
      if (value && value !== '') {
        return this._filterItems(value as string);
      } else {
        return of([]);
      }
    })
  );
}

private _filterItems(value: string): Observable<User[]> {
  const filterValue = value.toLowerCase();
  return of(usersDB.filter(item => item.userid.toLowerCase().includes(filterValue)));
}



}

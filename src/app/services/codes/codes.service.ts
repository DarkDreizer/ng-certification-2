import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class CodesService {
  private _codes: Set<number> = new Set<number>();
  private _codes$ = new Subject<number[]>();
  constructor(private storage: LocalStorageService) {
    const storedZipCodes = this.storage.codes;
    if (storedZipCodes) {
      this._codes = new Set(JSON.parse(storedZipCodes));
    }
    this._codes$.next(Array.from(this._codes));
  }

  get currentCodes(): Observable<number[]> {
    return this._codes$ as Observable<number[]>;
  }

  set newCode(code: number) {
    this._codes.add(code);
    this._codes$.next(Array.from(this._codes));
  }
}

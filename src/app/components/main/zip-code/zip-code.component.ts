import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CodesService } from '../../../services/codes/codes.service';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-zip-code',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.css'],
})
export class ZipCodeComponent implements OnInit, OnDestroy {
  zipCodeControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(5),
    Validators.pattern('^[0-9]+$'),
  ]);
  private _ngUnsubscribe$ = new Subject();

  constructor(
    private codes: CodesService,
    private storage: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.codes.currentCodes
      .pipe(takeUntil(this._ngUnsubscribe$))
      .subscribe((codesArray) => {
        this.storage.codes = JSON.stringify(codesArray);
      });
  }

  ngOnDestroy(): void {
    this._ngUnsubscribe$.next(true);
    this._ngUnsubscribe$.complete();
  }

  submitCode(): void {
    const zipCode = Number(this.zipCodeControl.value);
    this.codes.newCode = zipCode;
    this.zipCodeControl.reset();
  }
}

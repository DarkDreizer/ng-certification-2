import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  enteredZipCodes!: Set<number>;
  zipCodeControl: FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
    Validators.maxLength(5),
    Validators.pattern('^[0-9]+$'),
  ]);

  constructor() {}

  ngOnInit(): void {
    const storedZipCodes = localStorage.getItem('ZipCodes');
    if (storedZipCodes) {
      this.enteredZipCodes = JSON.parse(storedZipCodes);
    }
  }

  submitCode(): void {
    const currentZipCodes = localStorage.getItem('ZipCodes');
    const zipCode = Number(this.zipCodeControl.value);
    if (currentZipCodes) {
      const zipCodeArray: Set<number> = new Set<number>(
        JSON.parse(currentZipCodes)
      );
      zipCodeArray.add(zipCode);
      this.updateStoredZipCodes(zipCodeArray);
    } else {
      const newZipCodeArray = new Set<number>();
      newZipCodeArray.add(zipCode);
      this.updateStoredZipCodes(newZipCodeArray);
    }
    this.zipCodeControl.reset();
  }

  private updateStoredZipCodes(zipCodes: Set<number>): void {
    const setToArray = Array.from(zipCodes);
    localStorage.setItem('ZipCodes', JSON.stringify(setToArray));
  }
}

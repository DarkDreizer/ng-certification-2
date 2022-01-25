import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
  get codes(): string {
    return localStorage.getItem('ZipCodes');
  }

  set codes(codes: string) {
    localStorage.setItem('ZipCodes', codes);
  }
}

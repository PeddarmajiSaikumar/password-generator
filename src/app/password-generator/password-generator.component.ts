import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css'],
  standalone: true,
  imports:[FormsModule, CommonModule]
})
export class PasswordGeneratorComponent {
  passwordLength = 10;
  includeUppercase = true;
  includeLowercase = true;
  includeNumbers = true;
  includeSymbols = true;
  generatedPassword = '';
  strengthLabel = 'MEDIUM';
  strengthBars = [true, true, true, false]; 

  generatePassword() {
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    let validChars = '';
    if (this.includeNumbers) validChars += numbers;
    if (this.includeSymbols) validChars += symbols;
    if (this.includeLowercase) validChars += lowercase;
    if (this.includeUppercase) validChars += uppercase;

    let password = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      password += validChars[index];
    }

    this.generatedPassword = password;
    this.calculateStrength();
  }

  calculateStrength() {
    // Simple logic to determine the strength of the password
    let strengthPoints = 0;
    if (this.includeUppercase) strengthPoints++;
    if (this.includeLowercase) strengthPoints++;
    if (this.includeNumbers) strengthPoints++;
    if (this.includeSymbols) strengthPoints++;

    this.strengthBars = [false, false, false, false];
    for (let i = 0; i < strengthPoints; i++) {
      this.strengthBars[i] = true;
    }

    if (strengthPoints <= 2) {
      this.strengthLabel = 'WEAK';
    } else if (strengthPoints === 3) {
      this.strengthLabel = 'MEDIUM';
    } else {
      this.strengthLabel = 'STRONG';
    }
  }

  copyPassword() {
    navigator.clipboard.writeText(this.generatedPassword).then(() => {
      alert('Password copied to clipboard!');
    });
  }
}

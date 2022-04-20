export class CheckboxAppComponent {
  checkboxStatus: boolean;

  checkboxChanged(value: boolean) {
    this.checkboxStatus = value;
  }
}

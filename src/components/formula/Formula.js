import {ExcelComponents} from '@core/ExcelComponents';

export class Formula extends ExcelComponents {
  static className = 'excel-formula';

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return `   
      <div class="excel-formula__info">fx</div>
      <div class="excel-formula__input" contenteditable="true" spellcheck="false"></div>`;
  }

  onInput(event) {
    console.log('Formula: onInput', event.target.textContent)
    console.log('root', this.$root)
  }

  onClick(event) {
    console.log('Formula: onClick', event.target.textContent)
    console.log('root', this.$root)
  }
}
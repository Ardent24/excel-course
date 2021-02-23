import {ExcelComponents} from '@core/ExcelComponents';

export class Toolbar extends ExcelComponents {
  static className = 'excel-toolbar';

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    });
  }

  toHTML() {
    return `
    <div class="excel-toolbar__btn">
        <span class="material-icons">format_align_left</span>
      </div>
      <div class="excel-toolbar__btn">
        <span class="material-icons">format_align_center</span>
      </div>
      <div class="excel-toolbar__btn">
        <span class="material-icons">format_align_right</span>
      </div>
      <div class="excel-toolbar__btn">
        <span class="material-icons">format_bold</span>
      </div>
      <div class="excel-toolbar__btn">
        <span class="material-icons">format_italic</span>
      </div>
      <div class="excel-toolbar__btn">
        <span class="material-icons">format_underlined</span>
      </div>
      `;
  }

  onClick(event) {
    console.log(event.target)
  }
}
import {ExcelComponents} from '@core/ExcelComponents';

export class Header extends ExcelComponents {
  static className = 'excel-header';

  toHTML() {
    return `   
    <input type="text" class="excel-header__title" value="Новая таблица">
      <div class="excel-header__wrap">
        <div class="excel-header__btn">
          <span class="material-icons">exit_to_app</span>
        </div>
        <div class="excel-header__btn">
          <span class="material-icons">delete</span>
        </div>
      </div>`;
  }
}
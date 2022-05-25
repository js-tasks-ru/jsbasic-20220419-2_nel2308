/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this._container = document.createElement('table');
    let tbody = document.createElement('tbody');
    this._container.appendChild(tbody);
    for(let v in rows) {
      let tr = document.createElement('tr');
      tr.innerHTML = `<td>${rows[v].name}</td>
      <td>${rows[v].age}</td>
      <td>${rows[v].salary}</td>
      <td>${rows[v].city}</td>
      <td><button>X</button></td>`;
      tbody.appendChild(tr);
      let button = tr.querySelector('button');
      button.addEventListener('click', function(){
        tbody.removeChild(tr);
      }) ;

    }
  }
  
  get elem() {
    return this._container;
  }
}


/*
<tr>
            <td>Вася</td>
            <td>25</td>
            <td>1000</td>
            <td>Самара</td>
            <td><button>X</button></td>
        </tr>
        */

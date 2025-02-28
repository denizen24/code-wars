
**Что выведет данный скрипт?**
```js
  class C {
      constructor(x) {
        this.x = parseInt(x);
      }
  }
  console.log(new C('155foo').x);
```
Ответы:
* 155foo
* 155
* NaN
* Ошибка
* нет правильного варианта

Давайте разберем данный код и выясним, что он выведет.

### Код

```js
  class C {
      constructor(x) {
        this.x = parseInt(x);
      }
  }
  console.log(new C('155foo').x);
```

### Разбор

1. Определение класса C:
    - Класс C имеет конструктор, который принимает один параметр x.
    - Внутри конструктора значение x преобразуется в целое число с помощью функции parseInt.

2. Создание экземпляра класса:
    - Когда создается новый экземпляр класса C с аргументом '155foo', конструктор вызывается с этим значением.

3. Функция parseInt:
    - Функция parseInt пытается преобразовать строку в целое число. Она читает строку слева направо и извлекает целое число до тех пор, пока не встретит символ, который не может быть частью числа.
    - В случае строки '155foo', parseInt успешно извлечет 155 и игнорирует остальную часть строки (foo).

4. Вывод результата:
    - В результате, this.x будет равно 155.

### Итоговый вывод

Таким образом, при выполнении `console.log(new C('155foo').x);` в консоль будет выведено:

`155`


### Ответ

Правильный ответ: 155.

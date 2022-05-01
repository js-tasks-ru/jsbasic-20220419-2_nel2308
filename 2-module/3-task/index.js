let calculator = {
  read(a,b) {
    this[1] = a;
    this[2] = b;
    return this;
  },
  sum() {
      return this[1] + this[2];
    },
  mul() {
    return this[1] * this[2];
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

const colors = ['синий', 'черный', 'зеленый', 'красный', 'желтый', 'зеленый'];
function createColorString() {
  return colors
    .filter((n) => n === 'черный' || n === 'красный' || n === 'желтый')
    .join('-');
}

console.log(createColorString());

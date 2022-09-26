function getRandomArbitrary(min, max) {
  if(min >= max || !max){
    return ' минимальное число должно быть меньше максимального'
  } else if (min < 0) {
    return 'минимальное значение должно быть положительным'
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFraction (min, max, after){
  if (max <= min || min < 0 || !max || after < 0){
    // throw Error('Неверно указан диапазон чисел!');
    return'Неверно указан диапазон чисел!'
  }else{
    const random = Math.random() * (max - min) + min;
    return random.toFixed(after);
  }
}

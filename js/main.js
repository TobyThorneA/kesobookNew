import {getRandomArbitrary,getRandomFraction} from "./util.js";

let advertisements = [];
const types = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkinTime = ['12:00', '13:00', '14:00'];
const checkoutTime = ['12:00', '13:00', '14:00'];
const features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator',' conditioner'];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const advertisementsGenerate = () => {
  for(let i =  0; i < 10; i++) {

    const locationLat = getRandomFraction(35.65000, 37.70000, 5);
    const locationLng = getRandomFraction(139.70000, 139.8000, 5);

    const advertisement = {
      author: {
        avatar: `img/avatars/user${getRandomArbitrary(1,10).toString().padStart(2, 0)}.png`
      },
      offer: {
        title: 'noName',
        adress: `${locationLat}, ${locationLng}`,
        price: getRandomArbitrary(1000, 10000),
        type: types[getRandomFraction(0, 4)],
        rooms: getRandomArbitrary(1, 10),
        guests: getRandomArbitrary(1,20),
        checkIn: checkinTime[0,2],
        checkOut: checkoutTime[0,2],
        features: features.slice(0, getRandomArbitrary(0, features.length)),
        description: 'тут будет описание жилья',
        photos: photos.slice(0, photos.length)
      },
      location: {
        lat: locationLat,
        lng: locationLng,
      },
    }
    advertisements.push(advertisement)
  }
}

advertisementsGenerate()

console.log(advertisements)

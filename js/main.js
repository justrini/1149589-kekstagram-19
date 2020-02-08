"use strict";
///сначала начнём с функции, которая создаст объект со свойствами, описанными в задании.

var comments = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
];

var names = [
  "Kurt Cobain",
  "Krist Novoselic",
  "Dave Grohl",
  "John Kiffmeyer",
  "Billie Joe Armstrong",
  "Mike Dirnt"
];

var randomInteger = function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

var getRandomElement = function (array) {
  return array[randomInteger(0, array.length - 1)];
}

var createComment = function () {
  return {
    avatar: 'img/avatar-' + randomInteger(1, 6) + '.svg',
    message: getRandomElement(comments), //нелязя просто взять рандомное число тк  комменты не числа. как привязать числа к коментам?
    name: getRandomElement(names), //тоже смамое с именами
  }
};

var createComments = function (amount) {
  var commentsInfo = [];
  for (var i = 0; i < amount; i++) {
    commentsInfo[i] = createComment()
  }
  return commentsInfo;
}

var createPhotoInfo = function (id) {
  return {
    url: 'photos/' + id + '.jpg',
    description: getRandomElement(comments),
    likes: randomInteger(15, 200),
    comments: createComments(randomInteger(0, 5)),
  }
}

var createPhotosInfo = function (amount) {
  var photosInfo = [];
  for (var i = 0; i < amount; i++) {
    photosInfo[i] = createPhotoInfo(i + 1);
  }
  return photosInfo;
};

console.log(createPhotosInfo(25))

var createPhoteElement = function (info) {
  var templatePicture = document.querySelector('#picture');
  var picture = templatePicture.content.querySelector('a');
  var clonedPicture = picture.cloneNode(true);
  clonedPicture.querySelector('img').src = info.url;
  clonedPicture.querySelector('.picture__comments').textContent = info.comments.length;
  clonedPicture.querySelector('.picture__likes').textContent = info.likes;
  return clonedPicture;
}

var renderPhotos = function (pictures) {
  for (var i = 0; i < pictures.length; i++) {
    var pictureElement = createPhoteElement(pictures[i])
    document.querySelector('.pictures').appendChild(pictureElement)
  }

};

renderPhotos(createPhotosInfo(25))

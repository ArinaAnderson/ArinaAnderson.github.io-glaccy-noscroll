if (document.getElementById('map')) {
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.726877, 37.625792],
        zoom: 18
      }, {
        suppressMapOpenBlock: true
      }, {
        searchControlProvider: 'yandex#search'
      }),
      myPlacemark = new ymaps.Placemark(([55.726877, 37.625792]), {}, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/pin.svg',
        // Размеры метки.
        iconImageSize: [99, 143],
        // Смещение левого верхнего угла иконки относительно
        // её 'ножки' (точки привязки).
        iconImageOffset: [-25, -110]
        // iconImageOffset: [-22, -55]
      });
    myMap.geoObjects.add(myPlacemark);
    /*myMap.controls.remove('rulerControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('routeEditor');*/
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i)
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i)
      },
      any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
      }
    };
    if (isMobile.any()) {
      myMap.behaviors.disable('drag');
    }
  });
}



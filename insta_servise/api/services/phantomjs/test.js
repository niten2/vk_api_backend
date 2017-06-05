var sys = require('system');//подключаем модуль system
var page = require('webpage').create();//подключаем модуль webpage
var siteUrl = 'http://vk.ru/';//урл куда откуда парсим

function exit(code) {
  //функция для выхода
  setTimeout(function() {
    phantom.exit(code);
  }, 0);
  phantom.onError = function(){};
}

page.open(siteUrl, function(status) {

    // Данный статус указывает, что ссылка открылась
    // успешно и вернулся ответ сервера с кодом 200
    if (status === 'success') {

        //подключаем jQuery
        // page.injectJs('/js/jquery.js');//подключаем JQuery
      //
        // Выполняем весь CSS, JS код на странице
        var Links = page.evaluate(function() {
            // var links = $('html').find('a');//ищем все линки
            // var hrefs = [];//создаем переменную массив

            // $.each(links, function(num, item) {//num наверно индекс, а item походу элемент
            //     var href = $(item).attr('href');
            //     if (href !== '#') {//если не решетка то добавляем в массив
            //         hrefs.push(href);//вставляем в массив
            //     }
            // });

            // return hrefs;//возвращаем массив, он запишется в
            //переменную Links
        });

        // Вывод результата через обычный console.log
        // console.log(JSON.stringify(Links));
    }

    // Закрываем PhantomJS
    exit();
});

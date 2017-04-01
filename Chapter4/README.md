# 내장 모듈

* os

* url

> var url = require('url');

  * parse(urlStr, [, parseQueryString = false
                    , slashesDenoteHost = false])
    URL 문자열 -> URL 객체로 변환해 리턴

> var parsedObject = url.parse('https://myapp/message');
> console.log(parsedObject);

  * format(urlObj)
    URL 객체를 URL 문자열로 변환해 리턴

  * resolve(from, to)

* querystring
  URL 객체의 쿼리 처리 모듈

> var querystring = require('querystring');

  * stringify(obj[, sep='&', eq='=']) // object->string
  * parse(str[, sep='&', eq='=']) // string->object

* util

* filesystem

> var fs = require('fs');

  1. 메서드

    * readFile(file, encoding, callback)
    * readFileSync(file, encoding)
    * writeFile(file, data, encoding, callback)
    * writeFileSync(file, data, encoding)


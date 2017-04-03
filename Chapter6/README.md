# http 모듈

> var http = require('http');

* server 객체

  > var server = http.createServer();
  > server.listen(80);

  - 메서드

    * listen(port[, callback])
      서버를 실행한다.
    * close()
      서버를 종료한다.
    * on(event, callback)
      이벤트를 연결한다.

  - 이벤트
    * request
    * connection
    * close
    * checkContinue
    * upgrade
    * clientError



  
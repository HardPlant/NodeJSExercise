##전역 객체

  * window 객체 없음(웹 브라우저 자바스크립트 최상위 객체)
# 자바스크립트 빌트인 함수
  * setTimeout(function, time);
    - 시간(mill) 후 함수 실행

# 전역 문자열
  __filename, __dirname

# 전역 객체

  * console
    - log() : %d, %s, %j(JSON)
      - "\u001b[(숫자)m" ANSI 코드 사용 가능
    - time(label) (label : 시간저장 변수)
    - timeEnd(label)

  * process
    - 프로그램 관련 정보
    - Node.js 고유 객체

    1. 객체 속성
    - argv, env
    - version, versions(Node.js 종속 프로그램 버전)
    - arch, platform

    2. 객체 메서드
    - exit()
    - memoryUsage()
    - uptime()


  * exports
  

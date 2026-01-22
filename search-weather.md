## 1. 주제
- 원하는 지역의 현재 날씨를 검색하는 웹페이지 제작

## 2. 제약조건 
- 기본적으로 바닐라스크립트만 사용

## 3. 파일 구조
- html 은 weather.html 으로 생성
- css 와 js 는 각각 파일로 나눠서 작성
- 파일명은 html 과 동일하게 작성

## 4 폴더 구조
search-weather/
  |--weahter.html
  |--css/
  |   |--weahter.css
  |--js/
     |--weather.js

## 5. 기능설명

### 5.1 주요기능
- 지역을 입력하는 input 
- 검색버튼
- 검색된 지역의 날씨 표현(지역, 온도, 구름상태)
- 날씨는 아이콘으로 표시 

## 6. 기능 요구사항

### 6.1 API 연동 
- https://openweathermap.org 를 이용
- **호출 API**: https://api.openweathermap.org/data/2.5/weather?q={도시}&appid={API KEY}&units=metric
- 도시는 입력된 내용으로 치환
-api는 차후 등록 

### 6.2 UI 구성
- 화면 상단 가운데 제목 표시
- 검색 결과는 화면 중앙에 정렬
- 검색 창은 결과의 상단에 배치 
- 전체 배경색은 #dfdfdf
- 나머지는 알맞게 작성해 줘    
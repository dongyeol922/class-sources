// API 키 설정 (https://openweathermap.org 에서 발급받은 키를 입력하세요)
const API_KEY = 'a6f4f2f776ea82d0e86d4ac8911bb77d';

// DOM 요소
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const weatherResult = document.getElementById('weatherResult');
const errorMessage = document.getElementById('errorMessage');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const weatherIcon = document.getElementById('weatherIcon');

// 날씨 검색 함수
async function searchWeather() {
    const city = cityInput.value.trim(); 

    if (!city) {
        showError('도시 이름을 입력해주세요.');
        return;
    }

    if (API_KEY === 'YOUR_API_KEY') {
        showError('API 키를 설정해주세요.');
        return;
    }

    try {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=kr`;
        const response = await fetch(url);

        if (!response.ok) {
            if (response.status === 404) {
                showError('도시를 찾을 수 없습니다.');
            } else {
                showError('날씨 정보를 가져오는데 실패했습니다.');
            }
            return;
        }

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        showError('네트워크 오류가 발생했습니다.');
    }
}

// 날씨 정보 표시 함수
function displayWeather(data) {
    hideError();

    cityName.textContent = data.name;
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    description.textContent = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.alt = data.weather[0].description;

    weatherResult.classList.remove('hidden');
}

// 에러 메시지 표시 함수
function showError(message) {
    weatherResult.classList.add('hidden');
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

// 에러 메시지 숨김 함수
function hideError() {
    errorMessage.classList.add('hidden');
}

// 이벤트 리스너 등록
searchBtn.addEventListener('click', searchWeather);

cityInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchWeather();
    }
});

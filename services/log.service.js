import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
	console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}; 

const printSuccess = (message) => {
	console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
};

const printHelp = () => {
	console.log(
		dedent(`${chalk.bgCyan(' HELP ')}
		Без параметров - вывод погоды
		-s [CITY] для установки города
		-h для вывода помощи
		-t [API_KEY] для сохранения токена
		`)
	);
};

const printWeather = (res, icon) => {
	console.log(
		dedent(`${chalk.bgBlue(' WEATHER ')} Погода в городе ${res.name}
		За окном ${icon} ${res.weather[0].description}
		Температура: ${res.main.temp}°C (макс = ${res.main.temp_max}°C, мин = ${res.main.temp_min}°C)
		Ощущается как: ${res.main.feels_like}°C
		Влажность: ${res.main.humidity}%
		Скорость ветра: ${res.wind.speed} м/с
		Облачность: ${res.clouds.all}%
		`)
	);
};

export { printError, printSuccess, printHelp, printWeather };
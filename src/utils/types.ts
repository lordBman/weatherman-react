export interface Main{
    temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number, sea_level: number, grnd_level: number, humidity: number, temp_kf: number
}

export interface Weather{
    id: number, main: string, description: string, icon: string
}

export interface Clouds{
    all: number,
}

export interface Wind{
    speed: number, deg: number, gust: number
}

export interface Forecast{
    dt: number, main: Main, weather: Weather[], clouds: Clouds, wind: Wind, visibility: number, pop: number,

}

export interface Result{
    cod: string, message: string, cnt: number, list: Forecast[]
}
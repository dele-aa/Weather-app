"use server";

export async function getWeatherdata(city: string){
    try{
        const coordinates = await getCoordinates(city);
        const lat = coordinates[0].lat;
        const lon = coordinates[0].lon;
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_API_KEY}`);
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        const data =  await res.json();
        console.log(data);
        return data;
    }catch (error) {
        console.error(error);
    }
}

export async function getCoordinates(city: string){
    try{
        const res = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.NEXT_PUBLIC_API_KEY}`);
        const data =  await res.json();
        return data;
    }catch (error) {
        console.error(error);
    }
}
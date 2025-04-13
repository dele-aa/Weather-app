// 'use client';

import HeroOne from "./sections/HeroOne";
import HeroTwo from "./sections/HeroTwo";
import SearchBar from "./components/SearchBar";
import WeatherIcon from "./components/WeatherIcon";
import WeatherFigure from "./components/WeatherFigure";
import WeatherDateAndTime from "./components/WeatherDateAndTime";

export default function SideBySideLayout() {
  return (
    <main className="flex min-h-screen p-4 bg-[#F7F6F9]">
      <div className="w-1/4 p-4 bg-white shadow-md rounded-lg">
        <SearchBar/>
        <WeatherIcon/>
        <WeatherFigure/>
        <WeatherDateAndTime/>
      </div>
      <div className="w-3/4 p-10 bg-[#F7F6F9] rounded-lg ml-4">
        <HeroOne/>
        <HeroTwo/>
      </div>
    </main>
  );
}
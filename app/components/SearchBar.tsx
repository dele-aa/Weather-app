import React from 'react'
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
// import { getWeatherdata } from "./action";
import SubmitButton from './SubmitButton';
import { TfiTarget } from "react-icons/tfi";

const SearchBar = () => {
  const handleSearch = async (formData: FormData) => {
    const city = formData.get("city") as string;
    const { data } = await getWeatherdata(city);
    console.log(data);
  };

  return (
    <div className="flex bg-white p-4 flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-4">
        <form className="flex gap-3">
            <SubmitButton/>
          <input
            name="city"
            type="text"
            placeholder="Search for places ..."
            className="bg-white"
            required
          />
          <div className='w-4 h-4 flex justify items-center'>
            <TfiTarget />
          </div>
        </form>
      </div>
    </div>

  );
}

export default SearchBar


// export default function Home(){
//   const handleSearch = async (formData: FormData) =>{
//     const city = formData.get("city") as string;
//     const {data} =  await getWeatherdata(city);
//     console.log(data);
// };
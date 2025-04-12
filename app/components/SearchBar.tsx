// import React from 'react'
// import { Button } from "@/components/ui/button";
// import { Search } from "lucide-react";
// import { getWeatherdata } from "./action";
// import SubmitButton from './SubmitButton';

// const SearchBar = () => {
//   const handleSearch = async (formData: FormData) => {
//     const city = formData.get("city") as string;
//     const { data } = await getWeatherdata(city);
//     console.log(data);
//   };

//   return (
//     <div className="flex min-h-screen bg-white p-4 flex-col items-center justify-center">
//       <div className="w-full max-w-md space-y-4">
//         <form action={handleSearch} className="flex gap-3">
//           <input
//             name="city"
//             type="text"
//             placeholder="Search for places ..."
//             className="bg-white"
//             required
//           />
//           <SubmitButton/>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SearchBar


// // export default function Home(){
// //   const handleSearch = async (formData: FormData) =>{
// //     const city = formData.get("city") as string;
// //     const {data} =  await getWeatherdata(city);
// //     console.log(data);
// // };
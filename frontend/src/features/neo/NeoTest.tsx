// // src/components/NeoDataViewer.tsx
// import React from "react";
// import { format } from "date-fns";
// import { type NEOData } from "../neows/services/neows.service";

// interface NeoDataViewerProps {
//   neoData: NEOData[];
//   selectedDate: Date;
// }

// export const NeoDataViewer: React.FC<NeoDataViewerProps> = ({
//   neoData,
//   selectedDate,
// }) => {
//   if (!neoData.length) {
//     return (
//       <div className="mt-8 text-center text-purple-200 bg-white/10 p-6 rounded-xl border border-white/20">
//         No Near Earth Objects found for{" "}
//         {format(selectedDate, "MMMM d, yyyy")}
//       </div>
//     );
//   }

//   return (
//     <div className="mt-8 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md p-6">
//       <h2 className="text-xl font-bold text-purple-100 mb-4">
//         Near Earth Objects on {format(selectedDate, "MMMM d, yyyy")}
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         {neoData.map((neo) => (
//           <div
//             key={neo.id}
//             className={`p-4 rounded-lg border-2 ${
//               neo.is_potentially_hazardous_asteroid
//                 ? "border-red-500/30 bg-red-900/10"
//                 : "border-purple-500/30 bg-purple-900/10"
//             }`}
//           >
//             <h3 className="text-lg font-semibold text-white">
//               {neo.name}
//             </h3>
//             <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
//               <div>
//                 <p className="text-purple-200">Size:</p>
//                 <p className="text-white">
//                   {neo.estimated_diameter.kilometers.estimated_diameter_min.toFixed(
//                     3
//                   )}{" "}
//                   -{" "}
//                   {neo.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
//                     3
//                   )}{" "}
//                   km
//                 </p>
//               </div>
//               <div>
//                 <p className="text-purple-200">Speed:</p>
//                 <p className="text-white">
//                   {parseFloat(
//                     neo.close_approach_data[0].relative_velocity
//                       .kilometers_per_second
//                   ).toFixed(2)}{" "}
//                   km/s
//                 </p>
//               </div>
//               <div>
//                 <p className="text-purple-200">Miss Distance:</p>
//                 <p className="text-white">
//                   {parseFloat(
//                     neo.close_approach_data[0].miss_distance
//                       .kilometers
//                   ).toFixed(2)}{" "}
//                   km
//                 </p>
//               </div>
//               <div>
//                 <p className="text-purple-200">Hazardous:</p>
//                 <p
//                   className={
//                     neo.is_potentially_hazardous_asteroid
//                       ? "text-red-400"
//                       : "text-green-400"
//                   }
//                 >
//                   {neo.is_potentially_hazardous_asteroid
//                     ? "Yes ⚠️"
//                     : "No ✅"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

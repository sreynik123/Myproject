
 import { useState, useEffect } from "react";
 export default function NowPlaying() {
      const [players, setPlayers] = useState([]);  
      
      useEffect(() => {
           document.title = 'now-playing';
           fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=995b46c34578880175b2df0cb63164cd')
                .then(resp => {
                     if (!resp.ok) {
                          throw new Error("Data couldn't load!");
                     }
                     return resp.json();
                })
                .then((players) => {
                     setPlayers(players.results);
                })
      }, []);
      
      return (
           <>
                
                {/* Now-Playing */}
                <Header />
                <h1 data-aos="fade-down" className="text-center text-5xl text-blue-700 mt-20 font-[600]">Playing Now</h1>
                {players.map((dbs) => {
                     const { id, backdrop_path, title, release_date } = dbs 
                     const url = ('https://image.tmdb.org/t/p/w500/');
                                         
                     return (
                          <NowPlayingProps key={id} poster_img={url + backdrop_path} title={title} releaseDate={release_date} />
                     )
                }) }     
                
           </>
      );
 }
 export function NowPlayingProps({ poster_img, title, releaseDate }) {
      return (
           <>
                <article className="inline-block w-fit mx-10 mt-20 shadow-md h-fit rounded-[12px]">
      
                     <div data-aos="fade-up" className="flex flex-col border rounded-[12px] overflow-hidden w-[220px] h-[330px]">
                          <div>
                               <img className="aspect-square" src={ poster_img } alt="playing" />
                          </div>
                          
                          <div className="px-2 py-4 h-full bg-[#fffdef] flex flex-col items-start justify-center">
                               
                               <p className="text-black font-[700] text-nowrap hover:text-blue-600">{ title }</p>
                               <p className="text-black opacity-50 ">{ releaseDate }</p>
                               
                          </div>
                          
                     </div>
                     
                </article>
                     
           </>
           
           
      );
 }
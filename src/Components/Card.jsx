import React from 'react'

const Card = () => {
    const songs = [
      {
        name: "Tum Hi Ho",
        lyrics: "Hum tere bin ab reh nahi sakte, tere bina kya wajood mera.",
        available: true,
      },
      {
        name: "Kal Ho Na Ho",
        lyrics:
          "Har ghadi badal rahi hai roop zindagi, chhaon hai kabhi kabhi hai dhoop zindagi.",
        available: false,
      },
      {
        name: "Chaiyya Chaiyya",
        lyrics: "Jinke sar ho ishq ki chhaon, paaon ke neeche jannat hogi.",
        available: true,
      },
      {
        name: "Kabira",
        lyrics: "Manzilon ka junoon hai, par phir bhi dil yeh udaas hai.",
        available: false,
      },
      {
        name: "Tera Ban Jaunga",
        lyrics:
          "Main tera ban jaunga, mujhe baahon mein bhar le, tu mere saath chal le.",
        available: true,
      },
      {
        name: "Sun Saathiya",
        lyrics: "Sun saathiya, maahiya, barsa de ishqa ki boondiyan.",
        available: false,
      },
      {
        name: "Tujh Mein Rab Dikhta Hai",
        lyrics: "Tujh mein rab dikhta hai, yaara main kya karoon.",
        available: true,
      },
      {
        name: "Ae Mere Humsafar",
        lyrics:
          "Ae mere humsafar, ek zara intezaar, sun sadayein de rahi hai manzil pyaar ki.",
        available: false,
      },
      {
        name: "Gerua",
        lyrics: "Rang de tu mohe gerua, dhadkan bhi taareef kare.",
        available: true,
      },
      {
        name: "Pee Loon",
        lyrics: "Pee loon, tere neele neele nainon se shabnam.",
        available: false,
      },
      {
        name: "Dil Dhadakne Do",
        lyrics: "Dil dhadakne do, tum ho mera jadoo.",
        available: true,
      },
      {
        name: "Raabta",
        lyrics:
          "Kehte hain khuda ne is jahaan mein sabhi ke liye kisi na kisi ko hai banaya.",
        available: false,
      },
      {
        name: "Bulleya",
        lyrics:
          "Bulleya, ki jaana main kaun, na maine apne kiya ishq ka gunah.",
        available: true,
      },
      {
        name: "Zingaat",
        lyrics: "Zing zing zingaat, dhoom dhadak kar hai sabko nacha diya.",
        available: false,
      },
      {
        name: "Nashe Si Chadh Gayi",
        lyrics: "Nashe si chadh gayi oye, kudi nashe si chadh gayi.",
        available: true,
      },
      {
        name: "Tera Yaar Hoon Main",
        lyrics: "Jo tera hai woh mera hai, jo mera hai woh tera.",
        available: false,
      },
      {
        name: "Humma Humma",
        lyrics: "Ek ho gaye hum aur tum, toh ud gayi neendein.",
        available: true,
      },
      {
        name: "Dheere Dheere Se",
        lyrics: "Dheere dheere se, meri zindagi mein aana.",
        available: false,
      },
      {
        name: "Galliyan",
        lyrics: "Teri galliyan galliyan, teri galliyan.",
        available: true,
      },
      {
        name: "Pal",
        lyrics: "Pal do pal ki kyun hai zindagi, iss pyaar ko hai sada milegi.",
        available: false,
      },
      {
        name: "Tum Se Hi",
        lyrics: "Tum se hi din hota hai, surmayi shaam aati hai.",
        available: true,
      },
      {
        name: "Bekhayali",
        lyrics: "Bekhayali mein bhi tera hi khayal aaye.",
        available: false,
      },
      {
        name: "Subhanallah",
        lyrics: "Subhanallah, jo ho raha hai pehli dafa hai wallah.",
        available: true,
      },
      {
        name: "London Thumakda",
        lyrics: "London thumakda, balliye ni london thumakda.",
        available: false,
      },
      {
        name: "Badtameez Dil",
        lyrics: "Dil ki yeh dhadkan, tujhe kar de justify.",
        available: true,
      },
      {
        name: "Malhari",
        lyrics: "Aala re aala, malhari aala.",
        available: true,
      },
      {
        name: "Radha",
        lyrics: "Radha on the dance floor, radha likes to party.",
        available: true,
      },
      {
        name: "Zaalima",
        lyrics: "Zaalima, tere ishq ka jo nasha hai.",
        available: true,
      },
    ];


    const hadleclickdownload = (isAvailable) => {
        if (isAvailable) {
            alert("Downloading...");
        } else {
            alert("Not Available");
        }
      alert()
        
    }
  return (
    <div className="w-full h-screen bg-zinc-200 flex  flex-wrap gap-10 overflow-x-hidden items-center  justify-center">
          {songs.map((song, index) => 
    
  <div className="song py-2 px-3 w-32 h-[200px] mt-2 flex flex-col items-center justify-center gap-3 bg-zinc-100 rounded">
                  <h3 className="font-semibold text-xs ">{ song.name}</h3>
                  <p className="text-xs ">{ song.lyrics}</p>
                  <button onClick={()=>hadleclickdownload(song.available)}
                      className={`px-2  text-xs rounded w-full text-zinc-100 py-1 ${song.available ? "bg-green-400" : "bg-red-300"} font-semibold`}>
                      { song.available?"Download":"Not Available"}
        </button>
      </div>


          )



}
    
    </div>
  );
}

export default Card
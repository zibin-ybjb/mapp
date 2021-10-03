import axios from "axios";

const bsaeUrl = "http://127.0.0.1:3090";

export async function get(path:string){
   const res = await fetch(`${bsaeUrl}${path}`)
   return (await res.json())
}


import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";


interface quiz_types{
  id:number,
  name:string,
}
// Connect to the database

// Example query to test the connection




export default function Home() {
 return(
  <section>
   
    <Suspense fallback='<p>loading....<p/>'>
  
    </Suspense>
  </section>
 )
}

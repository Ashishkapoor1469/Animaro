import BackgroundVideo from "@/components/shared/home/backgroundv";

export default function Home() {
  return (
    <>
  
  <div className="h-screen  flex flex-col w-screen items-center text-white text-center ">
     <p className="text-base pt-18 md:pt-24">I’m Ashish, a passionate full-stack developer.</p> 

  </div>
 <div className="w-screen h-screen absolute top-0 -z-10">
<BackgroundVideo/>
 </div>
  
    </>
  );
}

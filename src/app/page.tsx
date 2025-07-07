  import CircularText from "@/components/reactbits/circulartext";
import RotatingText from "@/components/reactbits/rotateingtext";
export default function Home() {
  return (
    <>
  
  <div className="h-10 flex w-full justify-center items-center gap-4">
    Ashish
    <RotatingText
  texts={['React', 'Bits', 'Is', 'Cool!']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
  </div>
  <div className="flex w-62 h-62 justify-center items-center">
    <CircularText
  text="REACT*BITS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class text-xs w-full h-full bg-black"
/>
  </div>


    </>
  );
}

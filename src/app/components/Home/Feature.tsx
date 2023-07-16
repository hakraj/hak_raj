import Pitch from './Pitch';
import Stack from './Stack';


const Feature = () => {
  return (
    <section className='z-10 pitch&stack w-full max-w-6xl pt-28 pb-20 '>
      <div className='flex flex-wrap items-stretch justify-between min-h-[40vh] m-auto'>
        <Pitch />
        <Stack />
      </div>
    </section>
  )
}

export default Feature;
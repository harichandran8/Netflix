import heroBg from '../assets/hero-background.jpg'

const Hero = () => {
  return (
    <div className='relative min-h-[80vh] flex items-center justify-center overflow-hidden w-full bg-gradient-to-br from-black via-gray-900 to-black'>
        <img 
        src={heroBg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
        />
        Hero
    </div>
  )
}

export default Hero
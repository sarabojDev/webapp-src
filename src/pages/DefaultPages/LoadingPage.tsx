import { Loader } from 'lucide-react'
import LogoImage from '../../assets/images/logo2.png'
const LoadingPage = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <div className='flex items-center justify-center gap-1 flex-col font-[Poppins] text-gray-600 dark:text-white/65' >
        <div className='w-[120px]'>
          <img src={LogoImage} alt="Loading-logo-image" />
        </div>
        <div className='flex items-center justify-center gap-1 mt-3'>
          <span>
            <Loader size={20} className='animate-spin text-green-600' />
          </span>
          <p className=' text-sm '>Loading...</p>
        </div>
      </div>
    </div>
  )
}

export default LoadingPage
import  { useState } from 'react'
import coverVideo from '../../../assets/videos/bg-cover-2.mp4'
import { Button } from '@/components/ui/button'
import StaggerText from "react-stagger-text"
import { ExternalLink, LogIn } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useForm, SubmitHandler } from "react-hook-form"
import ForgotPassModal from '../Forgot-pass/ForgotPassModal'
import { useNavigate } from 'react-router-dom'
// import { ModeToggle } from '@/components/mode-toggle'


type Inputs = {
  email: string
  password: string
}

const SignInPage = () => {
  const navigater = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const [showPass, setShowPass] = useState<boolean>(false);
  const [forgotPassModal, setForgotPassModal] = useState<boolean>(false)

  const openForgotPassModal = ()=>{
    setForgotPassModal(true)
  }
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    navigater("/user")
  };

  return (
    <>
      <div className='w-full h-[632px] md:h-screen relative !font-[Poppins]'>

        {/* FORM AND HERO TEXT CONTEXT BOX */}
        <div className='w-full   md:h-full absolute left-0 top-0 flex items-center justify-center px-2 md:px-5 z-10  '>

          {/* HERO BANNER BOX */}
          <div className='flex-1 hidden md:block'>
            <div className='w-full'>
              <div className='w-[100px] h-[100px] mx-auto'>
                <img src="https://firebasestorage.googleapis.com/v0/b/nodal-time-327708.appspot.com/o/assetFiles%2FSidharth-Logo-Final.png?alt=media&token=1275de52-704e-40f3-8d3f-c6f15eed7548&_gl=1*1m95ysb*_ga*MjI1NTgzMjQ3LjE2ODA1ODIwMzY.*_ga_CW55HF8NVT*MTY4NTY4OTk1MC44NC4xLjE2ODU2ODk5NjAuMC4wLjA." alt="Sidharth Logo" />
              </div>
            </div>
            <div className="text-center mx-auto px-2 md:px-5">
              <h1 className="text-balance text-xl font-bold tracking-tight  md:text-3xl text-white dark:text-slate-900">
                <StaggerText
                  staggerType='word'
                  staggerDuration={2}
                >
                  Revolutionize Your Team’s Success with Our CRM Solutions
                </StaggerText></h1>
              <p className="mt-6 md:text-lg leading-8 text-white  dark:text-slate-900">
                <StaggerText
                  // startDelay={0.04}
                  startDelay={400}
                  staggerDuration={2}
                  staggerType='word'

                >
                  Elevate your business by empowering your team with tools that streamline communication and improve customer engagement effortlessly.
                </StaggerText>
              </p>
              <div className="mt-10  flex items-center justify-center gap-x-6">
                <Button className='flex items-center gap-2 '>
                  <span>
                    Register Now
                  </span>

                  <ExternalLink size={16} />
                </Button>
                {/* <a href="#" className="text-sm font-semibold leading-6 ">Learn more <span aria-hidden="true">→</span></a> */}
              </div>
            </div>
          </div>


          {/* FORM COMPONENT BOX */}
          <div className='w-full h-full flex items-center justify-center md:w-[450px] md:h-fit md:pr-4'>
            <div className='md:bg-white/95  md:dark:bg-slate-950  w-full h-full md:rounded-lg  px-4 py-10 md:px-8 md:py-8 space-y-4'>

              {/* Logo image  */}

              <div>
                <div className='w-[100px] md:w-[150px]'>
                  <img src="https://sidharthhousing-app.firebaseapp.com/vendors/images/Sidharth-Logo-Final.png" alt="Sidharth Logo2" />
                </div>
              </div>

              {/* Welcome back text */}

              <div className='py-3'>
                <p className='  text-xl  font-semibold tracking-wider mb-2  '>
                  Welcome back!</p>
                <p className='  leading-7 '>Please enter your details to signin</p>
              </div>

              {/* Form Component */}

              <div className='space-y-6'>
                <div className="grid w-full  items-center gap-3">
                  <Label htmlFor="email" className=''>Email</Label>
                  <Input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email address is required!"
                      },
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email address!"
                      }
                    })}
                    type="email"
                    id="email"
                    placeholder="Email..."
                    className='shadow-none placeholder:italic border-gray-300'
                  />

                  <div>
                    {errors.email && (
                      <span className='text-sm text-red-600 '>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="grid w-full  items-center gap-3">
                  <Label htmlFor="password" className=''>Password</Label>
                  <Input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required!"
                      },
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long."
                      },
                      maxLength: {
                        value: 20,
                        message: "Password cannot exceed 20 characters."
                      },
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // Example pattern: At least one letter and one number
                        message: "Password must contain at least one letter and one number."
                      }
                    })}
                    type={showPass ? "text" : 'password'}
                    id="password"
                    placeholder="Password..."
                    className='shadow-none placeholder:italic border-gray-300'
                  />

                  <div>
                    {errors.password && (
                      <span className='text-sm text-red-600  '>
                        {errors.password.message}
                      </span>
                    )}

                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="show-password" onCheckedChange={(c: boolean) => setShowPass(c)} checked={showPass} />
                    <Label htmlFor='show-password' className='text-gray-700 text-sm '>
                      Show password
                    </Label>
                  </div>
                </div>


                <div>
                  <Button onClick={handleSubmit(onSubmit)} variant={'default'} className='w-full flex items-center gap-2 text-white'>
                    <span>
                      SignIn
                    </span>
                    <span>
                      <LogIn size={16} />
                    </span>
                  </Button>
                </div>
              </div>


              <div className='block md:hidden'>
                <div className=" flex items-center justify-center gap-x-6 ">
                  <Button variant={'outline'} className='flex items-center gap-2 w-full'>
                    <span>
                      Register Now
                    </span>

                    <ExternalLink size={16} />
                  </Button>
                  {/* <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a> */}
                </div>
              </div>

              <div className='flex items-center justify-center'>
                <Button onClick={openForgotPassModal} variant={'link'} className='tracking-wide'>
                  Forgot Password ?
                </Button>
              </div>



            </div>
          </div>

        </div>


        {/* OVERLAYOUT COMPONENT */}
        <div className='w-full h-full absolute bg-black/40 dark:bg-white/10 left-0 top-0 hidden md:block'></div>



        {/* BACKGROUND VIDEO COMPONENT  */}
        <div
          className='w-full  h-full overflow-hidden hidden md:block'
        >
          <video
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }}
            autoPlay
            loop
            muted
            src={coverVideo}
          // src={'https://videos.pexels.com/video-files/8643643/8643643-uhd_2560_1440_24fps.mp4'} //is gd
          // src='https://videos.pexels.com/video-files/7732823/7732823-hd_1920_1080_25fps.mp4'
          // src='https://videos.pexels.com/video-files/853822/853822-hd_1920_1080_25fps.mp4'
          // src='https://videos.pexels.com/video-files/853870/853870-hd_1920_1080_25fps.mp4'
          />
        </div>
      </div>
        {/* <ModeToggle/> */}
      <ForgotPassModal showModal={forgotPassModal} setModal={setForgotPassModal} />
    </>
  )
}

export default SignInPage
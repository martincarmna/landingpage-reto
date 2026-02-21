import { Button } from "./button"

export const Form = () => {
  return (
    <div className="mb-75 absolute -top-50 mx-auto text-center py-10 px-6
    bg-Navy-850 rounded-[9px] w-84px m-auto">
        <h2 className="font-bold mb-4 text-center text-[1.25rem]">Get early access today</h2>
        <p className="text-sm mb-8">It only takes a few minutes to sign up and get started.
             If you have any questions, feel free to reach out to us!</p>
            <form className='flex flex-col gap-6' action="">
                <input className="bg-white rounded-3xl
                 placeholder:text-gray-400 text-center h-12" 
                placeholder="email@example.com"   type="email" />
                <Button text="Get Started For Free" />
            </form>
        
    </div>
  )
}

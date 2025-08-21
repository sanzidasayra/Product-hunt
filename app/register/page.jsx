import React from 'react'
import RegisterForm from '../register/RegisterForm'

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="flex justify-center items-center w-full md:w-1/2 p-6">
          <RegisterForm />
          
        </div>
      </div>
  )
}

export default page
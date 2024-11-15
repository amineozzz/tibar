'use client'

import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full flex">
      {/* Left side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/images/champs avec NT.png"
          alt="Traditional Tunisian architecture"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/images/Agneaux NT.png"
              alt="Noire de Thibar Logo"
              width={100}
              height={100}
              className=" w-32 h-32"
            />
            <h1 className="text-3xl font-bold text-gray-900">Noire de Thibar</h1>
            <p className="text-xl text-gray-600">👋 Marhbé</p>
          </div>

          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: 
                  'bg-[#c5f94d] hover:bg-[#b8ec40] text-black font-medium normal-case',
                formButtonSecondary:
                  'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300',

                card: 'shadow-none',
                header: 'hidden',
                footer: 'pb-0',
                formFieldInput: 
                  'rounded-md border-gray-200 focus:border-[#c5f94d] focus:ring-[#c5f94d]',
                dividerLine: 'bg-gray-200',
                dividerText: 'text-gray-500',
                socialButtonsBlockButton: 
                  'border border-gray-200 hover:bg-gray-50 text-gray-600',
                socialButtonsBlockButtonText: 
                  'text-gray-600 font-normal',
                formFieldLabel: 
                  'text-gray-700',
              },
             
            }}
            redirectUrl="/"
          />
        </div>
      </div>
    </div>
  );
}
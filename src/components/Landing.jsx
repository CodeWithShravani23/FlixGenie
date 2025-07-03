import React from 'react'
import Header from './Header'
import Login from './Login'
import Faq from './Faq'

export const Landing = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg')",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

      {/* Header (Logo stays on top) */}
      <div className="relative z-20">
        <Header />
      </div>
      <div className="relative z-20 flex justify-center items-center h-full">
        <Login/>
      </div>
    </div>
  )
}

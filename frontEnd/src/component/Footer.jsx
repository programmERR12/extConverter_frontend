import React from 'react'

function Footer() {
  return (
    <div>
     <footer className="py-6 text-gray-500 text-sm flex justify-center">
        © {new Date().getFullYear()} DocConvert — All rights reserved. Designed & built by Divyanshu Sharma.
      </footer>
    </div>
  )
}

export default Footer

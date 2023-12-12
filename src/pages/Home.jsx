import React from 'react'

const Home = () => {
  return (
    <section className='h-full min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-center items-center gap-y-6 relative z-[10]'>
      <span className='line'></span>
      <a href="https://www.instagram.com/mr_kajavadra/?igshid=NGVhN2U2NjQ0Yg%3D%3D&utm_source=qr" className='text-4xl hover:underline transition-all' target='_ansh'>
        My Instagram
        </a>
      <a href="https://www.snapchat.com/add/anshu_kajavadra?sender_web_id=18c1efc2-c5d1-45b9-82b4-687191a98e1d&device_type=desktop&is_copy_url=true" className='text-4xl hover:underline transition-all' target='_ansh'>
        My Snapchat
        </a>
    </section>
  )
}

export default Home
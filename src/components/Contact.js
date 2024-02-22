import React from 'react'

function Contact() {
  return (
    <>
      <span className='text-xl font-semibold'>Contact Page</span>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.3449387055102!2d76.78419437508923!3d30.764896884078347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ff282845c404b%3A0xc0844bf7cbdcc6e9!2sPunjab%20Engineering%20College%20(PEC)!5e0!3m2!1sen!2sin!4v1708498403342!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade" title='maps'></iframe>
      <form action="https://formspree.io/f/xvoeajzq" method="POST" className='flex flex-col items-center gap-2 max-w-[500px] w-full'>
        <input className="form_input" type="text" placeholder='Username' name="username" autoComplete='off' required/>
        <input className="form_input" type="email" placeholder='Email' name="Email" autoComplete='off' required/>
        <textarea className="form_input h-[150px] resize-none" name="message" placeholder='Enter your message'></textarea>
        <input className="p-2 w-full bg-blue-400 hover:bg-blue-500 font-semibold" type="submit" />
      </form>
    </>
  )
}

export default Contact
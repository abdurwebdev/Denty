import React from 'react'

function Background() {
  return (
    <div className='z-20  top-0 left-0 h-screen w-full relative   flex items-center justify-center'>
        <div className='absolute flex items-center justify-center'>
                <img className='w-56 h-80 rotate-6 object-cover rounded-lg' src="https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='absolute flex items-center justify-center'>
        <img className='w-56 h-80 rotate-12 object-cover rounded-lg' src="https://plus.unsplash.com/premium_photo-1708274149565-2831e10a65a8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='absolute flex items-center justify-center'>
        <img className='w-56 h-80 rotate-3 object-cover rounded-lg' src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='absolute flex items-center justify-center'>
        <img className='w-56 h-80 object-cover rounded-lg hover:rotate-12' src="https://plus.unsplash.com/premium_photo-1707932485795-1d0aed727376?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Background
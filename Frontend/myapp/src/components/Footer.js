import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-3  m-10 text-xs gap-2'>
        <div className='flex flex-col'>
            <h1 className='mb-10'>Quickhire</h1>
            <h1>ที่อยู่ : มอขอไข่</h1>
            <h1>ติดต่อสอบถาม :  quickhire@gmail.com</h1>
        </div>
        <div className='flex flex-col gap-4 md:mx-11'>
            <h1 className='mx-auto'>ติดตาม Quickhire ได้ที่</h1>
            <div className='flex justify-between '>
                <h1>FB</h1>
                <h1>quickhire</h1>
            </div>
            <div className='flex justify-between'>
                <h1>Line</h1>
                <h1>quickhire</h1>
            </div>
            <div className='flex justify-between'>
                <h1>Tiktok</h1>
                <h1>quickhire</h1>
            </div>

        </div>
        <div className='flex flex-col gap-1 mx-3'>
            <h1>ช่วยเหลือ</h1>
            <h1>ติดต่อเรา</h1>
            <h1>คำถามที่พบบ่อย</h1>
            <h1>วิธีใช้งาน</h1>
        </div>
    </div>
  )
}

export default Footer
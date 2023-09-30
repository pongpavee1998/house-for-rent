'use client'
import { HomeIcon } from '@heroicons/react/24/solid'

function Cards() {
  let html = [];
  for (let i = 0; i < 60; i++) {
    if (i % 17 == 0 || i % 27 == 0) {
      html.push(
        <div key={i} className="rounded overflow-hidden shadow-xl mb-2 bg-red-900">
          <div className="px-6 py-4 text-center ">
            <div className='flex justify-center items-center'><HomeIcon className="h-6 w-6 text-white" /></div>
            <div className="font-bold text-xl text-white my-3">
              {101 + i}
            </div>
            <p className="text-white text-base">
              ไม่ว่าง
            </p>
          </div>
        </div>)
    }
    else {
      html.push(
        <div key={i} className="rounded overflow-hidden shadow-xl transition hover:duration-300 hover:scale-105 mb-2 bg-gray-100">
          <div className="px-6 py-4 text-center ">
            <div className='flex justify-center items-center'><HomeIcon className="h-6 w-6 text-gray-800" /></div>
            <div className="font-bold text-xl text-gray-800 my-3">
              {101 + i}
            </div>
            <p className="text-gray-600 text-base">
              ห้องว่าง
            </p>
          </div>
        </div>)
    }
  }

  return html;
}

export default function Home() {
  const imgs: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <>
      <div className="w-100 relative text-center">
        <img
          src="/homeAsset/2.jpg"
          className="object-cover h-96 w-screen "
        />
        <div className="h-full w-full top-1/2 absolute -translate-y-1/2 p-8 bg-gradient-to-r from-gray-900 via-gray-900/70 to-gray-900/0 text-center ">
          <div className="text-5xl font-bold text-white mt-36">จองห้องพัก</div></div>
      </div>
      <div className="container mx-auto mb-44">

        <div className="text-3xl font-bold my-10 text-black text-center sm:text-left">
          ห้องพักทั้งหมด
        </div>



        <div className="grid 2xl:grid-cols-6 lg:grid-cols-5 sm:grid-cols-4 sm:gap-7 sm:px-0  gap-y-5 grid-cols-1 px-5">
          {/* Card */}

          <Cards />

        </div>
      </div>
    </>
  );
}

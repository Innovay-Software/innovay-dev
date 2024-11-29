'use client'

import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { IoMdClose } from 'react-icons/io'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

export default function PortfolioItemFullDisplay({
  children,
  photos,
}: {
  children: JSX.Element[] | JSX.Element
  photos: portfolioPhotoInterface[]
}) {
  const [open, setOpen] = useState(false)
  const onOpenTap = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log('onOpenTap')
    e.preventDefault()
    setOpen(true)
  }

  return (
    <>
      <button className="relative" onClick={onOpenTap}>
        {children}
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="flex-1 relative p-10 px-2 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 w-96"
            >
              <ImageGallery
                items={photos}
                lazyLoad={true}
                showThumbnails={false}
                showFullscreenButton={false}
              />
            </DialogPanel>
          </div>
        </div>
        <div className="fixed right-0 bottom-10 w-full flex justify-center z-50">
          <button
            className="p-4 bg-indigo-700 rounded-full"
            onClick={() => setOpen(false)}
          >
            <IoMdClose className="text-white text-2xl" />
          </button>
        </div>
      </Dialog>
    </>
  )
}

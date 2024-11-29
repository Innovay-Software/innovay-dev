'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { MdSupportAgent } from 'react-icons/md'
import Image from 'next/image'

export default function ContactUsModal({
  children,
}: {
  children: JSX.Element[] | JSX.Element
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
              className="flex-1 relative p-10 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white mb-10">
                <div className="sm:flex items-center">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 sm:mx-0 sm:h-10 sm:w-10">
                    <MdSupportAgent
                      aria-hidden="true"
                      className="h-10 w-10 text-indigo-700"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-bold leading-6 text-gray-900 uppercase"
                    >
                      Contact Us
                    </DialogTitle>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-evenly">
                <a
                  href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`}
                  className="p-3 rounded-full ring-2 ring-green-600"
                >
                  <Image src={'/mobile.png'} alt={''} width="40" height="40" />
                </a>
                <a
                  href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`}
                  className="p-3 rounded-full ring-2 ring-orange-500"
                >
                  <Image src={'/gmail.png'} alt={''} width="40" height="40" />
                </a>
                <a
                  href={`${process.env.NEXT_PUBLIC_CONTACT_WHATSAPP}`}
                  className="p-3 rounded-full ring-2 ring-green-400"
                  target="_blank"
                >
                  <Image
                    src={'/whatsapp.png'}
                    alt={''}
                    width="40"
                    height="40"
                  />
                </a>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

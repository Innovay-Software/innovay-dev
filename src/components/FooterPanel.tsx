import { FaMobile, FaEnvelope, FaSkype } from 'react-icons/fa6'
import config from '@/config'

const FooterPanel = () => {
  const mobile = config.contact.phone
  const email = config.contact.email
  const skype = 'ealton'
  const year = new Date().getFullYear()
  return (
    <footer id="footer">
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-32 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between max-w-screen-lg mx-auto">
          <div className="col-span-6 sm:col-span-3 md:col-span-3">
            <div className="flex flex-wrap justify-start items-center">
              <div className="ml-2 font-bold text-white text-xl">
                Contact Innovay Software
              </div>
            </div>
            <div className="mt-2 flex flex-wrap justify-start items-center">
              <FaMobile className="ml-2 inline-flex text-white mr-2" />
              <a href={'tel:' + mobile} className="text-white font-light">
                call: {mobile}
              </a>
            </div>
            <div className="mt-2 flex flex-wrap justify-start items-center">
              <FaEnvelope className="ml-2 inline-flex text-white mr-2" />
              <a href={'mailto:' + email} className="text-white font-light">
                email: {email}
              </a>
            </div>
            <div className="mt-2 flex flex-wrap justify-start items-center">
              <FaSkype className="ml-2 inline-flex text-white mr-2" />
              <a
                href={'skype:' + skype + '?call'}
                className="text-white font-light"
              >
                skype: {skype}
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="bg-black flex flex-wrap justify-center items-center w-full">
        <div className="text-white text-sm mb-4">
          @ {year} all rights reserved
        </div>
      </div>
    </footer>
  )
}

export default FooterPanel

import { FaHtml5, FaAppStoreIos } from 'react-icons/fa'
import { SiKubernetes } from 'react-icons/si'
import { MdSupportAgent } from 'react-icons/md'

export default function HomeServices() {
  const services = [
    {
      title: 'Web Development',
      icon: FaHtml5,
      content:
        'Our team of skilled web developers is dedicated to crafting innovative and visually stunning websites. With expertise in the latest technologies and a passion for creating exceptional user experiences, we deliver top-notch web solutions that drive results.',
    },
    {
      title: 'Mobile App Development',
      icon: FaAppStoreIos,
      content:
        'Our team of skilled mobile app developers specializes in creating intuitive and engaging applications for iOS and Android platforms. With a focus on delivering seamless user experiences and cutting-edge features, we build innovative mobile apps that exceed expectations.',
    },
    {
      title: 'Hosting Services',
      icon: SiKubernetes,
      content:
        'Our reliable hosting solutions leverage the power of AWS, GCP, and Kubernetes to provide a secure, scalable, and efficient platform for your online presence. With advanced security measures, 24/7 monitoring, and expert technical support, we ensure your website or application is always accessible and performs optimally.',
    },
    {
      title: 'General Consultation',
      icon: MdSupportAgent,
      content:
        'Our technical consultation services leverage the power of AI to provide businesses with expert guidance and innovative solutions. We work closely with our clients to understand their unique needs, combining human expertise with cutting-edge AI technology to deliver tailored solutions that drive efficiency, improve performance, and enhance overall business operations.',
    },
  ]
  return (
    <section className="bg-white text-center text-pretty">
      <div className="container mx-auto flex flex-wrap px-4 justify-between items-center">
        <div className="">
          <div className=" text-indigo-400">- OUR SERVICES -</div>
          <div className="my-5 text-2xl">
            Innovative Solutions for Technical Needs
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((item, index) => (
              <article
                key={`services-${index}`}
                className="flex max-w-xl flex-col items-start justify-between ring-2 ring-indigo shadow-lg shadow-indigo-300 p-5 pb-10 rounded-lg md:ring-0"
              >
                <div className="group relative">
                  <div className="flex justify-center">
                    <item.icon
                      size="40"
                      className="text-indigo-500 text-center"
                    />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a>
                      <span className="absolute inset-0"></span>
                      {item.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-md leading-6 text-gray-600">
                    {item.content}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

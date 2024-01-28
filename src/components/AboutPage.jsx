import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-8">
      <div className="container mx-auto py-16">
       <div className='flex  py-6 justify-between items-center '> <h1 className="text-4xl font-bold mb-8 text-center">
       Welcome to <span className="text-red-500">Netflix GPT</span>
     </h1>
     <Link
         className="py-2 px-4    bg-slate-400 text-white rounded-lg hover:bg-black "
        to='/browse'
       >
       HomePage 
       </Link></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              <h2 className="text-xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-800">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const keyFeatures = [
  {
    title: 'Routing',
    description:
      'Efficient and intuitive navigation is at the heart of our project. With a carefully designed routing system, users can seamlessly move through different sections of the application, ensuring a smooth and enjoyable experience.',
  },
  {
    title: 'OpenAI GPT for Searching Results',
    description:
      'We leverage the power of OpenAI GPT to enhance the search functionality in our application. Get accurate and relevant results through advanced language processing, making your search experience more intelligent and efficient.',
  },
  {
    title: 'Testing',
    description:
      'Quality assurance is paramount in our development process. We have implemented a rigorous testing framework to identify and eliminate potential issues, ensuring a reliable and bug-free application. From unit tests to end-to-end testing, we’ve got it covered.',
  },
  {
    title: 'Redux',
    description:
      'Managing state in complex applications is made simple with Redux. Our project leverages the power of Redux to maintain a single source of truth for the application state, facilitating efficient data flow and making it easier to debug and maintain.',
  },
  {
    title: 'Debouncing',
    description:
      'To enhance the user experience, we’ve incorporated debouncing techniques. This not only optimizes the performance of our application but also ensures that resource-intensive tasks are executed judiciously, preventing unnecessary strain on the system.',
  },
  {
    title: 'Authentication',
    description:
      'Security is a top priority for us. Our project includes robust authentication mechanisms to safeguard user data and provide a secure environment for seamless user interaction. Rest assured, your information is in safe hands.',
  },
  {
    title: 'API Integration',
    description:
      'Connecting with external services is a breeze with our integrated API solutions. We’ve carefully crafted a system that seamlessly interacts with APIs, allowing for dynamic content updates and real-time data synchronization.',
  },
  {
    title: 'Responsive Design with Tailwind CSS',
    description:
      'A visually appealing and responsive design is crucial in today’s diverse device landscape. Our project is built with Tailwind CSS, ensuring a sleek and responsive user interface that adapts seamlessly to various screen sizes and resolutions.',
  },
  {
    title: 'Custom Hooks',
    description:
      'To enhance code reusability and maintainability, we’ve implemented custom hooks. These hooks encapsulate common functionalities, making it easier for developers to plug and play, reducing redundancy and ensuring a more streamlined development process.',
  },
  {
    title: 'Deployment',
    description:
      'Effortlessly deploy your application with our streamlined deployment process. Whether you choose traditional servers or opt for cloud-based solutions, we provide comprehensive deployment options to suit your needs.',
  },
];

export default AboutPage;

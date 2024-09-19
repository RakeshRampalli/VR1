import React, { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(contactForm);
    setContactForm({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold text-blue-600">VR1 IT Solutions</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <button
                className={`text-lg ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => handleTabChange('home')}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className={`text-lg ${activeTab === 'services' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => handleTabChange('services')}
              >
                Services
              </button>
            </li>
            <li>
              <button
                className={`text-lg ${activeTab === 'contact' ? 'text-blue-600' : 'text-gray-600'}`}
                onClick={() => handleTabChange('contact')}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {activeTab === 'home' && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to VR1 IT Solutions</h2>
          <p className="text-lg text-gray-600">
            We are a software company that provides innovative solutions to businesses and individuals.
          </p>
        </section>
      )}
      {activeTab === 'services' && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Our Services</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-lg font-bold text-gray-600">Software Development</h3>
              <p className="text-lg text-gray-600">
                We develop custom software solutions that meet the needs of our clients.
              </p>
            </li>
            <li>
              <h3 className="text-lg font-bold text-gray-600">IT Consulting</h3>
              <p className="text-lg text-gray-600">
                We provide expert IT consulting services to help businesses improve their technology infrastructure.
              </p>
            </li>
          </ul>
        </section>
      )}
      {activeTab === 'contact' && (
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">Get in Touch</h2>
          <form onSubmit={handleContactFormSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-bold text-gray-600 mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="block w-full p-2 text-lg text-gray-600 border border-gray-300 rounded"
                type="text"
                id="name"
                name="name"
                value={contactForm.name}
                onChange={handleContactFormChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold text-gray-600 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="block w-full p-2 text-lg text-gray-600 border border-gray-300 rounded"
                type="email"
                id="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactFormChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg font-bold text-gray-600 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="block w-full p-2 text-lg text-gray-600 border border-gray-300 rounded"
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleContactFormChange}
              />
            </div>
            <button
              className="bg-blue-600 text-lg text-white py-2 px-4 rounded hover:bg-blue-700"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </section>
      )}
    </div>
  );
};

export default App;

import React from 'react';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { CONTACT_INFO } from '@/data/contact';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 text-center mx-auto flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 rounded mb-8"></div>
          <p className="text-lg text-gray-600">
            {CONTACT_INFO.message}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>
            
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 mb-0.5">Email</div>
                <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {CONTACT_INFO.email}
                </div>
              </div>
            </a>

            {CONTACT_INFO.linkedin && (
              <a 
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-0.5">LinkedIn</div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Connect on LinkedIn
                  </div>
                </div>
              </a>
            )}

            {CONTACT_INFO.github && (
              <a 
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-xl hover:shadow-md hover:border-blue-100 transition-all group"
              >
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                  <FaGithub size={20} />
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-0.5">GitHub</div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    View Repositories
                  </div>
                </div>
              </a>
            )}
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

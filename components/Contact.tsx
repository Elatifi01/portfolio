"use client";
import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched(true);
    if (e.currentTarget.checkValidity()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center py-20 font-sans"
      id="contact"
    >
      <style>{`
        .contact-form-1 input:invalid, .contact-form-1 textarea:invalid { box-shadow: none; }
        .contact-form-1 .error-msg { display: none; }
        .contact-form-1 .peer:not(:placeholder-shown):not(:focus):invalid ~ .error-msg { display: block; }
        .contact-form-1.was-validated .peer:invalid ~ .error-msg { display: block; }
      `}</style>

      {/* Map Background */}
      <div className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799160894!2d-74.25987584510595!3d40.69767006338158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1646927236592!5m2!1sen!2s"
          title="Google Map"
        ></iframe>
        <div className="absolute inset-0 bg-white/20 dark:bg-black/60 pointer-events-none"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-4 grid lg:grid-cols-5 shadow-2xl rounded-3xl overflow-hidden min-h-150">
        {/* Left Panel */}
        <div className="lg:col-span-2 bg-black text-white p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black-600 rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
          <div>
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white">Headquarters</p>
                  <p className="text-sm text-gray-400 mt-1">
                    102 Street, 4821
                    <br />
                    New York, USA
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white">Email Us</p>
                  <p className="text-sm text-gray-400 mt-1">
                    hello@company.com
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-white">Call Us</p>
                  <p className="text-sm text-gray-400 mt-1">
                    +1 (555) 000-0000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
              Follow Us
            </p>
            <div className="flex gap-4">
              {/* Facebook */}
              <a
                href="#"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#3b5998] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-pink-600 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </div>
              </a>

              {/* TikTok */}
              <a
                href="#"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-black transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#0077b5] transition-colors">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right: The Form */}
        <div className="lg:col-span-3 bg-white dark:bg-gray-800 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Send a Message
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-10">
            We usually respond within 24 hours.
          </p>

          <form
            onSubmit={handleSubmit}
            className={`contact-form-1 space-y-6 ${touched ? "was-validated" : ""}`}
            noValidate
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="group">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  placeholder=" "
                  className="peer w-full bg-gray-50 dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-700 px-4 py-3 focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-black outline-none transition-colors text-gray-900 dark:text-white"
                />
                <span className="error-msg text-xs text-red-500 mt-1">
                  First Name is required
                </span>
              </div>
              <div className="group">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  placeholder=" "
                  className="peer w-full bg-gray-50 dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-700 px-4 py-3 focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-black outline-none transition-colors text-gray-900 dark:text-white"
                />
                <span className="error-msg text-xs text-red-500 mt-1">
                  Last Name is required
                </span>
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                placeholder=" "
                className="peer w-full bg-gray-50 dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-700 px-4 py-3 focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-black outline-none transition-colors text-gray-900 dark:text-white"
              />
              <span className="error-msg text-xs text-red-500 mt-1">
                Please enter a valid email address
              </span>
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Subject
              </label>
              <input
                type="text"
                required
                placeholder=" "
                className="peer w-full bg-gray-50 dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-700 px-4 py-3 focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-black outline-none transition-colors text-gray-900 dark:text-white"
              />
              <span className="error-msg text-xs text-red-500 mt-1">
                Subject is required
              </span>
            </div>

            <div className="group">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                Project Details
              </label>
              <textarea
                rows={3}
                required
                placeholder=" "
                className="peer w-full bg-gray-50 dark:bg-gray-900 border-b-2 border-gray-200 dark:border-gray-700 px-4 py-3 focus:border-black dark:focus:border-white focus:bg-white dark:focus:bg-black outline-none transition-colors text-gray-900 dark:text-white"
              ></textarea>
              <span className="error-msg text-xs text-red-500 mt-1">
                Please provide details
              </span>
            </div>

            <button className="cursor-pointer px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-sm hover:opacity-80 transition-opacity w-full md:w-auto">
              {!submitted ? "Submit Form" : "Sent Successfully"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

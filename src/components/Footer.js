import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold mb-2">About Us</h4>
          <p className="text-sm opacity-90">
            TIPEZE helps you find skilled professionals, transport providers,
            and property listings easily.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p className="text-sm opacity-90">Email: info@tipeze.com</p>
          <p className="text-sm opacity-90">Phone: +123 456 789</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Newsletter</h4>
          <form
            onSubmit={(e) => { e.preventDefault(); alert('Thanks for subscribing!'); }}
            className="flex gap-2"
          >
            <input
              className="px-3 py-2 rounded-md text-gray-900 w-full"
              type="email"
              placeholder="Your email"
              required
            />
            <button className="bg-orange-500 px-4 py-2 rounded-md">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs py-3 bg-blue-900/70">© {new Date().getFullYear()} TIPEZE</div>
    </footer>
  );
}

export default function ContactPage() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-amber-500 inline-block">
        Get in Touch
      </h2>
      <div className="mb-6 space-y-2">
        <p className="text-lg font-bold">
          Email us at{' '}
          <a href="mailto:info@saudade.com" className="text-amber-500 hover:underline">
            info@saudade.com
          </a>
        </p>
        <p>Enschede, Netherlands</p>
      </div>
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-4">Follow Us</h3>
        <ul className="flex justify-center gap-6 text-2xl text-gray-400">
          <li>
            <a href="#" aria-label="Instagram" className="hover:text-amber-500 transition">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#" aria-label="SoundCloud" className="hover:text-amber-500 transition">
              <span className="sr-only">SoundCloud</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M11.7 6.1A5 5 0 001 11v2a1 1 0 001 1h16a4 4 0 00-4-4 4 4 0 00-2.3.7 5 5 0 00-1-4.6z" />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg max-w-md mx-auto mb-8">
        <h3 className="text-xl font-bold mb-3">Join our mailing list</h3>
        <p className="mb-4 text-gray-300">Sign up to receive updates about future events.</p>
        <form className="flex gap-2 justify-center">
          <input
            type="email"
            placeholder="Email address"
            className="flex-grow px-3 py-2 rounded bg-gray-700 border border-gray-600 text-gray-100"
          />
          <button type="submit" className="bg-amber-600 text-gray-900 px-4 py-2 rounded font-bold hover:bg-amber-700">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
const Footer = () => {
  return (
    <footer className="bg-emerald-500 text-black">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-black">
              MyWebsite
            </h2>

            <p className="mt-4 text-sm leading-6 text-black">
              We build modern and simple digital experiences
              that help businesses grow.
            </p>

            {/* Social Media */}
            <div className="flex justify-center mt-2 sm:items-start gap-4 text-white">
              <a
                href="#"
                className="rounded-full bg-gray-800 px-3 py-2 text-sm transition hover:bg-gray-700 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 px-3 py-2 text-sm transition hover:bg-gray-700 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="rounded-full bg-gray-800 px-3 py-2 text-sm transition hover:bg-gray-700 hover:text-white"
              >
                X
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold ">
              Product
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-white">
                  Features
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Pricing
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Documentation
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-black">
              Company
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-white">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Blog
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Careers
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-black">
              Support
            </h3>

            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#" className="transition hover:text-white">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="transition hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">

            <p>
              © 2026 MyWebsite. All rights reserved.
            </p>

            <p>
              Made with ❤️ using React & Tailwind CSS
            </p>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;


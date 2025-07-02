import Image from "next/image"
import Link from "next/link"


export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and App Download Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              
              <span className="text-xl font-semibold text-gray-900">Fresh Harvests</span>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Download App!</h3>
              <div className="flex  space-y-2">
                <Link href="#" className="inline-block">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Download on the App Store"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
                <Link href="#" className="inline-block">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Get it on Google Play"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links 1 */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Quick links 1</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Detail Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links 2 */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Quick links 2</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Favorites
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Cart
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-4">Contact us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">icon</span>
                <span className="text-sm text-gray-600">1234 5678 90</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">icon</span>
                <span className="text-sm text-gray-600">Freshharvests@gmail.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-sm text-gray-600 mt-0.5">icon</span>
                <span className="text-sm text-gray-600">Tanjung Sari Street, Pontianak, Indonesia</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Accepted Payment Methods:</h4>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">VISA</div>
                <div className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">PayPal</div>
                <div className="bg-black text-white px-2 py-1 rounded text-xs font-bold">Pay</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">© Copyright 2024. All Rights Reserved by Banana Studio</p>

          <div className="flex items-center space-x-4">
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              {/* <Twitter className="w-5 h-5" /> */}
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              {/* <Facebook className="w-5 h-5" /> */}
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-600">
              {/* <Instagram className="w-5 h-5" /> */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

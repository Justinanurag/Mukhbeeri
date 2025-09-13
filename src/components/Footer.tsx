import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerSections = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Investor Relations', href: '/investors' },
  ],
  editorial: [
    { name: 'Editorial Policy', href: '/editorial-policy' },
    { name: 'Fact Check', href: '/fact-check' },
    { name: 'Corrections', href: '/corrections' },
    { name: 'Code of Ethics', href: '/ethics' },
  ],
  services: [
    { name: 'Mobile App', href: '/app' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'RSS Feeds', href: '/rss' },
    { name: 'Archives', href: '/archives' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'DMCA Policy', href: '/dmca' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/mukhbeerinews' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/mukhbeerinews' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/mukhbeerinews' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/mukhbeerinews' },
];

export const Footer = () => {
  return (
    <footer className="bg-news-secondary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-news-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold">Mukhbeeri News</h1>
                <p className="text-xs text-gray-300 -mt-1">Trusted journalism since 2024</p>
              </div>
            </Link>
            
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              India's premier digital news platform delivering credible journalism, 
              in-depth analysis, and breaking news coverage across politics, business, 
              sports, technology, and lifestyle.
            </p>

            <div className="space-y-4">
              <h4 className="font-semibold text-white">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  placeholder="Enter your email for newsletter"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-news-primary"
                />
                <Button className="bg-news-primary hover:bg-news-primary/90 shrink-0">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerSections.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Editorial</h4>
            <ul className="space-y-2">
              {footerSections.editorial.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 mb-6">
              {footerSections.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerSections.legal.slice(0, 2).map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-news-primary flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Headquarters</p>
                <p className="text-gray-300 text-sm">New Delhi, India 110001</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-news-primary flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Newsroom</p>
                <p className="text-gray-300 text-sm">+91 11 2345-6789</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-news-primary flex-shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Editorial</p>
                <p className="text-gray-300 text-sm">editor@mukhbeerinews.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <span className="text-white text-sm font-medium">Follow Us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
            <div className="text-gray-300 text-sm text-center sm:text-right">
              <p>&copy; 2024 Mukhbeeri News. All rights reserved.</p>
              <p className="mt-1">Committed to truth, transparency, and public service journalism.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
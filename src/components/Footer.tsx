import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark-900 border-t border-dark-200 dark:border-dark-700 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-dark-600 dark:text-dark-300 text-center flex items-center gap-2">
            Made with <FaHeart className="text-red-500 animate-pulse" /> by{' '}
            <span className="font-semibold gradient-text">Damewan Bareh</span>
          </p>
          <p className="text-dark-500 dark:text-dark-400 text-sm">
            © {currentYear} Damewan Bareh. All rights reserved.
          </p>
          <p className="text-dark-500 dark:text-dark-400 text-sm italic">
            "Building intelligent solutions, one commit at a time"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

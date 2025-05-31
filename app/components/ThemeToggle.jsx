import { Lightbulb, LightbulbOff } from 'lucide-react';

const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className={`p-2 rounded-lg transition-all duration-300 ${
      darkMode 
        ? 'bg-teal-800 text-white hover:bg-teal-700 border border-teal-500/30' 
        : 'bg-emerald-200 text-emerald-600 hover:bg-emerald-300 border border-emerald-300'
    }`}
  >
       {darkMode ? (
                  <Lightbulb size={20} />
                ) : (
                  <LightbulbOff size={20} />
                )}
  </button>
);

export default ThemeToggle;
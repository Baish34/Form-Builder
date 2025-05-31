import { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';

const FieldEditor = ({ field, onUpdate, onClose, darkMode }) => {
  const [localField, setLocalField] = useState(field);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleSave = () => {
    onUpdate(localField);
    onClose();
  };

  const addOption = () => {
    const options = localField.options || [];
    setLocalField({
      ...localField,
      options: [...options, `Option ${options.length + 1}`]
    });
  };

  const updateOption = (index, value) => {
    const options = [...localField.options];
    options[index] = value;
    setLocalField({ ...localField, options });
  };

  const removeOption = (index) => {
    const options = localField.options.filter((_, i) => i !== index);
    setLocalField({ ...localField, options });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-6">
      <div className={`w-full max-w-lg h-[calc(100vh-3rem)] rounded-xl shadow-2xl border overflow-hidden flex flex-col ${
        darkMode 
          ? 'bg-teal-950/90 border-teal-800/50 text-emerald-100' 
          : 'bg-white border-emerald-200/70 text-teal-900'
      } transition-all duration-300`}>

        {/* Header */}
        <div className={`px-5 py-4 flex items-center justify-between bg-gradient-to-r ${
          darkMode ? 'from-teal-900 to-emerald-900' : 'from-emerald-50 to-teal-50'
        }`}>
          <h3 className={`text-lg font-bold ${
            darkMode ? 'text-emerald-300' : 'text-teal-800'
          }`}>
            Customize Field
          </h3>
          <button
            onClick={onClose}
            className={`p-2 rounded-full transition-all ${
              darkMode ? 'hover:bg-teal-800 text-emerald-400' : 'hover:bg-emerald-100 text-teal-700'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          <div className="grid gap-5">
            {/* Label Input */}
            <div className="space-y-1.5">
              <label className={`text-sm font-semibold ${
                darkMode ? 'text-emerald-400' : 'text-teal-600'
              }`}>
                Field Label
              </label>
              <input
                type="text"
                value={localField.label}
                onChange={(e) => setLocalField({ ...localField, label: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  darkMode 
                    ? 'bg-teal-900/50 border-teal-700 focus:ring-emerald-400 text-emerald-100' 
                    : 'bg-emerald-50/50 border-emerald-300 focus:ring-teal-500 text-teal-900'
                }`}
              />
            </div>

            {/* Placeholder Input */}
            <div className="space-y-1.5">
              <label className={`text-sm font-semibold ${
                darkMode ? 'text-emerald-400' : 'text-teal-600'
              }`}>
                Placeholder Text
              </label>
              <input
                type="text"
                value={localField.placeholder || ''}
                onChange={(e) => setLocalField({ ...localField, placeholder: e.target.value })}
                className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                  darkMode 
                    ? 'bg-teal-900/50 border-teal-700 focus:ring-emerald-400 text-emerald-100' 
                    : 'bg-emerald-50/50 border-emerald-300 focus:ring-teal-500 text-teal-900'
                }`}
              />
            </div>

            {/* Required Checkbox */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="required"
                checked={localField.required}
                onChange={(e) => setLocalField({ ...localField, required: e.target.checked })}
                className={`w-5 h-5 rounded-md border-2 appearance-none cursor-pointer transition-all duration-200 ${
                  darkMode 
                    ? localField.required 
                      ? 'bg-emerald-500 border-emerald-500' 
                      : 'border-teal-600 hover:border-emerald-400 bg-teal-900/50' 
                    : localField.required 
                      ? 'bg-teal-500 border-teal-500' 
                      : 'border-emerald-300 hover:border-teal-400 bg-emerald-50'
                } checked:bg-teal-500 checked:border-teal-500`}
              />
              <label htmlFor="required" className={`text-sm font-semibold cursor-pointer ${
                darkMode ? 'text-emerald-300' : 'text-teal-700'
              }`}>
                Required
              </label>
            </div>

            {/* Help Text */}
            <div className="space-y-1.5">
              <label className={`text-sm font-semibold ${
                darkMode ? 'text-emerald-400' : 'text-teal-600'
              }`}>
                Help Text
              </label>
              <textarea
                value={localField.helpText || ''}
                onChange={(e) => setLocalField({ ...localField, helpText: e.target.value })}
                rows={4}
                className={`w-full px-4 py-2.5 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 resize-none ${
                  darkMode 
                    ? 'bg-teal-900/50 border-teal-700 focus:ring-emerald-400 text-emerald-100' 
                    : 'bg-emerald-50/50 border-emerald-300 focus:ring-teal-500 text-teal-900'
                }`}
                placeholder="Add guidance for users..."
              />
            </div>

            {/* Options Section */}
            {(localField.type === 'select' || localField.type === 'radio' || localField.type === 'checkbox') && (
              <div className="space-y-3">
                <label className={`text-sm font-semibold ${
                  darkMode ? 'text-emerald-400' : 'text-teal-600'
                }`}>
                  Options
                </label>
                <div className="grid gap-2">
                  {localField.options?.map((option, index) => (
                    <div key={index} className="group flex items-center gap-2">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => updateOption(index, e.target.value)}
                        className={`flex-1 px-4 py-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                          darkMode 
                            ? 'bg-teal-900/50 border-teal-700 focus:ring-emerald-400 text-emerald-100' 
                            : 'bg-emerald-50/50 border-emerald-300 focus:ring-teal-500 text-teal-900'
                        }`}
                      />
                      <button
                        onClick={() => removeOption(index)}
                        className={`p-2 rounded-lg transition-all duration-200 ${
                          darkMode
                            ? 'text-red-400 hover:bg-red-500/20 hover:text-red-300'
                            : 'text-red-500 hover:bg-red-500/10 hover:text-red-600'
                        }`}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={addOption}
                    className={`w-full py-2.5 px-4 rounded-lg border border-dashed transition-all duration-200 font-semibold flex items-center justify-center gap-2 ${
                      darkMode 
                        ? 'border-emerald-600/50 hover:bg-emerald-900/30 text-emerald-400 hover:text-emerald-300' 
                        : 'border-teal-500/50 hover:bg-teal-100/30 text-teal-600 hover:text-teal-700'
                    }`}
                  >
                    <Plus size={16} />
                    Add Option
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className={`p-5 grid grid-cols-2 gap-3 bg-gradient-to-r ${
          darkMode ? 'from-teal-900 to-emerald-900' : 'from-emerald-50 to-teal-50'
        }`}>
          <button
            onClick={handleSave}
            className={`py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
              darkMode 
                ? 'bg-emerald-600 text-white hover:bg-emerald-500' 
                : 'bg-teal-600 text-white hover:bg-teal-500'
            }`}
          >
            Save
          </button>
          <button
            onClick={onClose}
            className={`py-2.5 px-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
              darkMode 
                ? 'bg-teal-800/50 text-emerald-300 hover:bg-teal-700/70' 
                : 'bg-emerald-100/50 text-teal-700 hover:bg-emerald-200/70'
            }`}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FieldEditor;
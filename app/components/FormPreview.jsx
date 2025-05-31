import { useEffect, useState } from "react";
import FormFieldPreview from "./FormFieldPreview";


const FormPreview = ({ form, previewMode, darkMode }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  
  useEffect(() => {
    setIsBrowser(true);
  }, []);
  
  const getPreviewStyles = () => {
    switch (previewMode) {
      case 'mobile': 
        return {
          width: '320px',
          containerClass: 'min-w-[320px]',

        };
      case 'tablet': 
        return {
          width: '568px',
          containerClass: 'min-w-[568px]',

        };
      default: 
        return {
          width: '768px', 
          containerClass: 'min-w-[768px]',

        };
    }
  };

  const { width, containerClass, icon } = getPreviewStyles();

  return (
    <div className={`${containerClass} border-l p-4 overflow-x-auto ${
      darkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-100 border-white/20 backdrop-blur-lg'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          {icon}
          <h3 className={`font-bold text-teal-600`}>          
            {previewMode.charAt(0).toUpperCase() + previewMode.slice(1)} Preview
          </h3>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div 
          style={{ width }}
          className={`relative overflow-hidden p-5 rounded-xl border shadow-xl transition-all duration-300 ${
            darkMode 
              ? 'bg-gray-800 border-gray-600' 
              : 'bg-white/80 border-white/30 backdrop-blur-md'
          }`}
        >
          {/* Decorative elements */}
          <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full blur-xl"></div>
          
          <div className="relative">
            {form.description && (
              <p className={`mb-8 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {form.description}
              </p>
            )}
            
            {form.fields.length === 0 ? (
              <div className={`text-center py-12 px-5 rounded-lg border-2 border-dashed ${
                darkMode 
                  ? 'text-gray-500 border-gray-700 bg-gray-800/50' 
                  : 'text-gray-400 border-teal-100/40 bg-teal-100/10'
              }`}>
                <p className="font-medium">No fields</p>
              </div>
            ) : (
              <div className="space-y-6">
                {form.fields.map((field) => (
                  <div key={field.id} className="group">
                    <label className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {field.label}
                      {field.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                    {isBrowser && <FormFieldPreview field={field} darkMode={darkMode} />}
                    {field.helpText && (
                      <p className={`text-xs mt-1.5 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        💡 {field.helpText}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            <div className="mt-8 pt-6 border-gray-200 dark:border-gray-700">
              <button className={`w-full py-3 px-6 rounded-xl font-medium text-white transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg ${
                darkMode 
                  ? 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 hover:shadow-teal-500/20' 
                  : 'bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 hover:shadow-teal-600/30'
              } transform hover:-translate-y-0.5`}>
                <span>Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPreview;
import { Type, AlignLeft, ChevronDown, Check, Circle, Calendar, Mail, Phone } from 'lucide-react';

const FIELD_TYPES = {
  text: { label: 'Text Input', icon: Type, component: 'TextInput' },
  textarea: { label: 'Text Area', icon: AlignLeft, component: 'TextareaInput' },
  date: { label: 'Date Picker', icon: Calendar, component: 'DateInput' },
  checkbox: { label: 'Checkbox', icon: Check, component: 'CheckboxInput' },
  email: { label: 'Email', icon: Mail, component: 'EmailInput' },
  phone: { label: 'Phone', icon: Phone, component: 'PhoneInput' },
  select: { label: 'Select', icon: ChevronDown, component: 'SelectInput' },
};

const FieldPalette = ({ darkMode }) => (
  <div className={`w-70 border-l shadow-md ${darkMode
      ? 'bg-teal-950/90 border-teal-800/50'
      : 'bg-white border-emerald-200/70'
    }`}>
    <div className={`p-4 bg-gradient-to-b ${darkMode ? 'from-teal-900 to-emerald-900' : 'from-emerald-50 to-teal-50'
      }`}>
      <h3 className={`text-base font-bold text-center ${darkMode ? 'text-emerald-200' : 'text-teal-900'
        }`}>
        Form Fields
      </h3>
    </div>

    <div className="p-3 grid grid-cols-1 gap-2">
      {Object.entries(FIELD_TYPES).map(([type, config]) => {
        const IconComponent = config.icon;
        return (
          <div
            key={type}
            draggable
            onDragStart={(e) => {
              e.dataTransfer.setData('fieldType', type);
            }}
            className={`group p-2 rounded-md cursor-grab active:cursor-grabbing transition-all duration-200 hover:scale-105 ${darkMode
                ? 'bg-teal-900/70 hover:bg-teal-800/80 border border-teal-700/40'
                : 'bg-emerald-50/80 hover:bg-emerald-100 border border-teal-300/50'
              }`}
          >
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-sm flex items-center justify-center transition-colors ${darkMode
                  ? 'bg-emerald-900/50 group-hover:bg-emerald-800 text-emerald-300 group-hover:text-emerald-200'
                  : 'bg-teal-100 group-hover:bg-teal-200 text-teal-600 group-hover:text-teal-700'
                }`}>
                <IconComponent size={14} />
              </div>
              <span className={`text-sm font-semibold truncate ${darkMode ? 'text-emerald-200 group-hover:text-emerald-100' : 'text-teal-700 group-hover:text-teal-900'
                }`}>
                {config.label}
              </span>
            </div>
            <div className={`h-0.5 mt-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${darkMode ? 'bg-emerald-400' : 'bg-teal-500'
              }`} />
          </div>
        );
      })}
    </div>
  </div>
);

export default FieldPalette;
import { useState, useEffect } from 'react';
import { BarChart3, Download, ArrowLeft, Lightbulb, LightbulbOff } from 'lucide-react';

const ResponseViewer = ({ darkMode, setDarkMode, onBack }) => {
  const [responses, setResponses] = useState([]);
  const [form, setForm] = useState(null);
  const [forms, setForms] = useState({});
  const [selectedFormId, setSelectedFormId] = useState(null);
  const [formResponses, setFormResponses] = useState({});

  useEffect(() => {
    try {
      const storedResponses = JSON.parse(localStorage.getItem('formResponses') || '{}');
      const formData = JSON.parse(localStorage.getItem('formBuilderForms') || '{}');
      const sharedForms = JSON.parse(localStorage.getItem('sharedForms') || '{}');

      const allForms = { ...formData, ...sharedForms };
      setForms(allForms);
      setFormResponses(storedResponses);

      if (selectedFormId) {
        setResponses(storedResponses[selectedFormId] || []);
        setForm(allForms[selectedFormId]);
      }
    } catch (error) {
      console.warn('Failed to load forms or responses:', error);
    }
  }, [selectedFormId]);

  const handleFormSelect = (formId) => {
    setSelectedFormId(formId);
  };

  const exportToCSV = () => {
    if (!responses.length || !form) return;

    try {
      const headers = form.fields.map(field => field.label);
      const csvContent = [
        ['Timestamp', ...headers].join(','),
        ...responses.map(response => [
          new Date(response.timestamp).toLocaleString(),
          ...form.fields.map(field => {
            const value = response.responses[field.id];
            return `"${Array.isArray(value) ? value.join(', ') : value || ''}"`;
          })
        ].join(','))
      ].join('\n');

      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${form.title}-responses.csv`;
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.warn('Failed to export CSV:', error);
    }
  };

  const pageClasses = `min-h-screen ${darkMode ? 'bg-teal-900 text-teal-100' : 'bg-emerald-50 text-emerald-900'}`;
  const headerClasses = `px-6 py-4 flex items-center justify-between border-b ${darkMode
    ? 'bg-teal-900 border-teal-700/50'
    : 'bg-white/70 backdrop-blur-md border-emerald-200'}`;

  return (
    <div className={pageClasses}>
      <header className={headerClasses}>
        <div className="flex items-center space-x-3">
          {selectedFormId ? (
            <button
              onClick={() => setSelectedFormId(null)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-teal-800 text-teal-300' : 'bg-emerald-100 text-emerald-700'}`}
            >
              <ArrowLeft size={16} />
            </button>
          ) : onBack && (
            <button
              onClick={onBack}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-colors ${darkMode
                ? 'bg-teal-800/60 hover:bg-teal-700/60 text-teal-300 hover:text-white border border-teal-700/50'
                : 'bg-emerald-100 hover:bg-emerald-200 text-emerald-700 border border-emerald-200'}`}
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          )}

          <h2 className={`text-2xl font-bold ${darkMode ? 'text-emerald-400' : 'text-emerald-800'}`}>
            {selectedFormId ? form?.title : 'Form Responses'}
          </h2>

          {selectedFormId && (
            <span className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-teal-800 text-teal-300' : 'bg-emerald-100 text-emerald-700'}`}>
              {responses.length} {responses.length === 1 ? 'response' : 'responses'}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-3">
          {selectedFormId && responses.length > 0 && (
            <button
              onClick={exportToCSV}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium ${darkMode
                ? 'bg-emerald-700 hover:bg-emerald-600 text-white'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white'}`}
            >
              <Download size={16} />
              <span>Export CSV</span>
            </button>
          )}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-teal-800 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}
          >
            {darkMode ? <Lightbulb size={20} /> : <LightbulbOff size={20} />}
          </button>
        </div>
      </header>

      <main className="p-6">
        {!selectedFormId ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(forms).map(([id, formData]) => {
                const responseCount = (formResponses[id] || []).length;
                return (
                  <div
                    key={id}
                    onClick={() => handleFormSelect(id)}
                    className={`cursor-pointer p-5 rounded-xl border transition-all ${darkMode
                      ? 'border-teal-700 hover:border-teal-600 bg-teal-800 hover:bg-teal-700'
                      : 'border-emerald-200 hover:border-emerald-300 bg-white hover:bg-emerald-50 shadow-sm'}`}
                  >
                    <h3 className="text-lg font-semibold mb-2">{formData.title}</h3>
                    <div className="flex justify-between text-sm">
                      <span className={darkMode ? 'text-teal-400' : 'text-emerald-600'}>
                        {formData.fields?.length || 0} fields
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs ${responseCount > 0
                        ? darkMode ? 'bg-emerald-900 text-emerald-300' : 'bg-emerald-100 text-emerald-800'
                        : darkMode ? 'bg-teal-700 text-teal-400' : 'bg-emerald-100 text-emerald-600'}`}>
                        {responseCount} {responseCount === 1 ? 'response' : 'responses'}
                      </span>
                    </div>
                  </div>
                );
              })}
              {Object.keys(forms).length === 0 && (
                <div className={`col-span-3 text-center py-12 ${darkMode ? 'text-teal-400' : 'text-emerald-500'}`}>
                  <BarChart3 size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg">No forms found</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            {responses.length === 0 ? (
              <div className={`text-center py-12 ${darkMode ? 'text-teal-400' : 'text-emerald-500'}`}>
                <p className="text-lg">No responses yet</p>
              </div>
            ) : (
              <div className={`overflow-x-auto rounded-lg border shadow-lg ${darkMode ? 'border-teal-700' : 'border-emerald-200'}`}>
                <table className={`w-full text-sm ${darkMode ? 'bg-teal-800' : 'bg-white'}`}>
                  <thead className={`${darkMode ? 'bg-teal-700' : 'bg-emerald-50'}`}>
                    <tr>
                      <th className={`px-4 py-3 text-left font-medium ${darkMode ? 'text-teal-300' : 'text-emerald-700'}`}>Timestamp</th>
                      {form?.fields?.map(field => (
                        <th key={field.id} className={`px-4 py-3 text-left font-medium ${darkMode ? 'text-teal-300' : 'text-emerald-700'}`}>
                          {field.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {responses.map((response, i) => (
                      <tr key={i} className={`${darkMode ? 'hover:bg-teal-700' : 'hover:bg-emerald-50'} border-t ${darkMode ? 'border-teal-600' : 'border-emerald-100'}`}>
                        <td className="px-4 py-2">{new Date(response.timestamp).toLocaleString()}</td>
                        {form.fields.map(field => (
                          <td key={field.id} className="px-4 py-2">
                            {Array.isArray(response.responses[field.id])
                              ? response.responses[field.id].join(', ')
                              : response.responses[field.id] || '-'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default ResponseViewer;

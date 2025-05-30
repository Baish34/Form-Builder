FormCraft
A dynamic and intuitive form creation and management platform built with React Remix. Design, share, and analyze responses with a sleek, user-friendly interface.


Features
Form Design

Drag-and-Drop Builder: Easily construct forms by dragging components from a library.
Field Variety: Supports text, textarea, dropdown, checkbox, radio, date, email, phone, and number fields.
Field Customization: Edit labels, placeholders, required status, and helper text.
Live Preview: View your form in real-time during creation.
Responsive Preview: Check form appearance on desktop, tablet, and mobile.

Form Organization

Reusable Templates: Save forms as templates for quick reuse.
Pre-Designed Templates: Includes templates for common forms (e.g., Contact, Survey).
Theme Options: Switch between light and dark modes for comfortable editing.

Form Distribution

Shareable URLs: Generate unique links for sharing forms.
One-Click Copy: Copy form links to clipboard instantly.
Response Tracking: Monitor response counts for each form.

Response Management

Response Dashboard: View submissions in a clear, tabular format.
Response Filtering: Select specific forms to review their responses.
CSV Export: Download response data as CSV files.
Submission Stats: Instant insights into response counts.

User Experience

Modern Interface: Clean design with smooth animations.
Offline Support: Stores forms and responses in localStorage.
Progress Saving: Respondents can save and resume form progress.
Input Validation: Built-in validation for required fields and specific input types.

Technical Details
Architecture

Framework: Built with React Remix for server-side rendering.
State Management: Uses React Context API and useReducer for efficient state handling.
Styling: Leverages Tailwind CSS for responsive design.
Storage: Saves data in browser localStorage.

Data Storage

Forms: formBuilderForms
Shared Forms: sharedForms
Templates: customFormTemplates
Responses: formResponses
In-Progress Submissions: formFillerProgress

Components

FormCraftCore: Main form-building interface.
FieldLibrary: Draggable field components.
FormWorkspace: Form editing canvas.
FormViewer: Real-time form preview.
ResponseCollector: End-user form submission interface.
ResponseAnalyzer: Tool for viewing and exporting responses.
FieldConfigurator: Interface for editing field properties.

Getting Started
Prerequisites

Node.js (v14 or higher)
npm or yarn

Installation

Clone the repository:
git clone https://github.com/Prabhsingh0401/Form-Builder-Remix.git
cd form-craft


Install dependencies:
npm install
# or
yarn install


Start the development server:
npm run dev
# or
yarn dev


Open http://localhost:5173 in your browser.


Usage
Creating a Form

Open the FormCraft interface.
Drag fields from the component library to the workspace.
Click fields to edit their properties.
Use the preview panel to visualize the form.
Click "Save" to store the form.

Using Templates

Go to the "Templates" section.
Select a pre-built or custom template.
Customize as needed.
Save custom templates with "Save as Template."

Sharing Forms

Click "Share" to generate a unique URL.
Copy the link with one click.
Share the link with respondents.

Viewing Responses

Navigate to the "Responses" section.
Select a form to view its submissions.
Use the "Export CSV" button to download data.

Acknowledgments

Icons by Lucide.
Powered by React Remix and React.

License
This project is licensed under the MIT License. See the LICENSE file for details.


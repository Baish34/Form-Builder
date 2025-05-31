
# Form Builder

An advanced, user-friendly form building and response collection tool powered by React Remix. Design powerful forms, distribute them effortlessly, and analyze responses — all through a modern and efficient UI.

**Deployed Link:** [https://form-builder-chi-black.vercel.app/]


## 🚀 Key Features

### 🧱 Form Creation
- **Device View Toggle**:Preview how your form looks on multiple screen sizes.
- **Configurable Fields:**:  Personalize labels, placeholders, validation rules, and helper messages.
- **Instant Preview**: See your form update in real time as you build it.
- **Field Options**: Choose from inputs like text, email, phone, date, radio, checkboxes, selects, and more.
- **Visual Drag & Drop Builder**: Construct custom forms with a simple drag-and-drop interface.

### 🔗 Sharing & Distribution
- **Unique Share Links:**: Instantly create shareable URLs for each form.
- **Quick Copy**: One-click button to copy form links for sharing.
- **Response Monitor:*: Track how many users have filled out each form.

### 🗂️ Form Management
- **Dark/Light Theme Toggle**: Switch themes for better visual comfort while editing.
- **Template System**: Quickly reuse saved forms or use built-in templates like surveys or contact forms.

### 💡 Enhanced UX
- **Smart Validation:**: Real-time checks for required fields and correct input types.
- **Save & Resume**: Form fillers can come back later to complete submissions.
- **Offline Resilience**:  Forms and responses are cached in the browser.
- **Minimal UI:**: Designed with smooth interactions and clear structure.

### 📥 Collecting Responses
- **Submission Count**: Get quick stats on total submissions.
- **CSV Export**: Download all submission data in CSV format.
- **Form Selector**: Easily pick which form’s responses to view.
- **Tabular Response Viewer**: Clean table display of submitted responses.

## ⚙️ Technical Stack

### 🧱 Architecture
- **Framework**: Remix for modern server-rendered React apps.
- **State Handling**: Context API with useReducer for scalable state management.
- **Styling**: Built using Tailwind CSS for mobile-first UI.
- **Storage**: Utilizes localStorage for offline data persistence.

## 🛠️ Getting Started

### 📌 Requirements
- Node.js (v14 or higher)
- npm or yarn

### 📥 Installation

1. Clone and set up the project:
```bash
git clone [https://github.com/Baish34/Form-Builder.git]
cd form-builder
```

2. Install the dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage Guide

### 🔧 Build a Form
1. Launch the app and navigate to the form builder.
2. Drag components from the field library to the canvas.
3. Click on any field to modify its properties.
4. Use the live preview to review your form visually.
5. Click "Save" when ready.

### 🧰 Work with Templates
1. Go to the Templates section.
2. Select a default or previously saved template.
3. Customize it as needed.
4. Save new versions by clicking "Save as Template."

### 📤 Share Your Form
1. Hit the Share button on any saved form.
2. A link will be generated and copied to your clipboard.
3. Share it with your users to start collecting data.

### 📊 Review Submissions
1. Click on Responses in the navigation menu.
2. Select the form you want to inspect.
3. View responses in the table.
4. Use Export CSV to download the data.

## 🙏 Acknowledgments

- UI Icons provided by Lucide
- Built using React and Remix
- Styled with Tailwind CSS

## 📄 License
This project is licensed under the MIT License. See the LICENSE file for full details.

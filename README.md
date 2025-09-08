# ✒️ SignatureBuilder
`SignatureBuilder` is a lightweight web app for generating professional email signatures for Cardinal Compliance Consultants, LLC.


![GitHub License](https://img.shields.io/github/license/kscardinal/SignatureBuilder)
![GitHub Release](https://img.shields.io/github/v/release/kscardinal/SignatureBuilder)
![GitHub commit activity](https://img.shields.io/github/commit-activity/t/kscardinal/SignatureBuilder)
![GitHub last commit](https://img.shields.io/github/last-commit/kscardinal/SignatureBuilder)

---

## Table of Contents  
- [Overview](#Overview)
- [Features](#features)
- [Tech Stack](#Tech-Stack)
- [Project Structure](#project-structure)
- [Setup](#setup)
- [Usage](#usage)
- [Customization](#Customization)
- [License](#License)

---

## Overview  

`SignatureBuilder` was developed to simplify the creation of consistent, branded email signatures. Employees can quickly enter their details, preview the result, and copy it for use in their email client.

---

## Features  

- Enter full name and job title to generate a signature
- One-click copy to clipboard
- Responsive layout with Cardinal branding
- Social media and company links included
- Optional PHP file for server-side validation

---

## Tech Stack  

- **Frontend**: HTML, CSS, JavaScript 
- **Backend**: PHP (Optional)
- **Database**: N/A
- **Other Tools**: Browser-native Clipboard API

---

## Project Structure  

- SignatureBuilder/
- ├── [`signatureBuilder.html`](signatureBuilder.html)                       # Main HTML page
- ├── [`signatureBuilder.css`](signatureBuilder.css)                       # Styling and layout
- ├── [`signatureBuilder.js`](signatureBuilder.js)                       # Clipboard functionality and interactions
- └── [`signatureBuilder.php`](signatureBuilder.php)                    # Optional server-side validation


---

## Setup

1. **Clone repo**
```bash
git clone https://github.com/kscardinal/signatureBuilder.git
cd signatureBuilder
```
2. Open `signatureBuilder.html` in your browser.
3. No build tools or dependencies are required.

---

## Usage

1. Enter your full name and job title
2. Preview your generated email signature
3. Click Copy Signature to copy it to the clipboard

---

## Customization

- Branding
  - Update colors, fonts, and layout in signatureBuilder.css to reflect new company branding.
- Fields
  - Add more input fields (e.g., phone number, email, department) in signatureBuilder.html.
  - Update signatureBuilder.js to include new fields in the generated signature.
- Links & Icons
  - Replace or extend social media and company links in signatureBuilder.html.
  - Swap icons with updated SVGs or brand images if needed.
- Server-Side (Optional)
  - Expand signatureBuilder.php to validate input or generate signatures dynamically.

---

## License

This project is licensed under the MIT License, which means you are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, as long as you include the original copyright and license notice in any copy of the software. The software is provided "as is," without warranty of any kind.

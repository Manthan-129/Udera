For frontend React Maker -- > npm create vite@latest

Packages that we need to download for our frontend:
react-router-dom   react-youtube   uniqid   quill   humanize-duration   rc-progress   react-simple-star-rating

To download Tailwind-postCSS -> npm install tailwindcss @tailwindcss/postcss postcss
then make, postcss.config.js

To get Google Fonts -> get the import embedded code from the google fonts, and then add it to the index.css file
and add the font to the font-family.


AppContextProvider -> To provide all common things without props drilling in each file.
createContext -> useContext

Outlet -> <Outlet /> is the place where all educator child pages (Dashboard, MyCourse, AddCourse, etc.) are rendered.

To play the youtube video  -> we use react-youtube

To display the progress bar in the MyEnrollment page -> we use the 'rc-progress' where we import {Line}

HashCode to add the Stars - > &#9733;

for backend-> 
npm init -y
npm install express nodemon dotenv cors cloudinary mongoose multer stripe svix@1.42.0 @clerk/express morgan razorpay

"server": "nodemon server.js", needs to do change in the package.json
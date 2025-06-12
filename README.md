# 📝 BlogSite – Full Stack Blog Application

A full-stack blog platform where users can sign up, log in, create, edit, delete, and view blog posts. The app uses:

- 🔧 **Backend**: Django & Django REST Framework
- ⚛️ **Frontend**: React.js
- 🔐 JWT Authentication
- 📄 Paginated blog listing (3x4 grid)

---

## 🔧 Backend Setup (Django + DRF)

### 📁 Location:
`/backend/`

### ▶️ Steps to Run:

1. **Create and activate virtual environment:**

   ```bash
   python -m venv env
   # Windows
   env\Scripts\activate
   # macOS/Linux
   source env/bin/activate
Install dependencies:

bash
Copy
Edit
pip install -r requirements.txt
If requirements.txt doesn't exist, install manually:

bash
Copy
Edit
pip install django djangorestframework djangorestframework-simplejwt corsheaders
Make migrations and migrate:

bash
Copy
Edit
python manage.py makemigrations
python manage.py migrate
Create a superuser (optional):

bash
Copy
Edit
python manage.py createsuperuser
Run the server:

bash
Copy
Edit
python manage.py runserver
Backend API URL:

bash
Copy
Edit
http://localhost:8000/api/posts/
⚛️ Frontend Setup (React)
📁 Location:
/frontend/

▶️ Steps to Run:
Navigate to frontend folder:

bash
Copy
Edit
cd frontend
Install dependencies:

bash
Copy
Edit
npm install
Start the React app:

bash
Copy
Edit
npm start
React app will be live at:

arduino
Copy
Edit
http://localhost:3000
🔄 API Endpoints
Method	Endpoint	Description
GET	/api/posts/	List all blog posts
POST	/api/posts/	Create a new blog post
GET	/api/posts/:id/	Retrieve single post
PUT	/api/posts/:id/	Update a post
DELETE	/api/posts/:id/	Delete a post

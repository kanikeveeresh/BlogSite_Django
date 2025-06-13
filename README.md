📝 BlogSite – Full Stack Blog Application
A full-stack blog platform where users can sign up, log in, create, edit, delete, and view blog posts.

Tech Stack:
🔧 Backend: Django & Django REST Framework

⚛️ Frontend: React.js

🔐 Authentication: JWT (JSON Web Token)

📄 UI Feature: Paginated blog listing (3x4 grid layout)

🔧 Backend Setup (Django + DRF)
📁 Location: /backend/

▶️ Steps to Run
Create and activate virtual environment:
python -m venv env
# Windows
env\Scripts\activate
# macOS/Linux
source env/bin/activate

Install dependencies:
pip install django djangorestframework djangorestframework-simplejwt corsheaders

Make migrations and migrate:
python manage.py makemigrations
python manage.py migrate

Run the Django development server:
python manage.py runserver

⚛️ Frontend (React)
▶️ Steps to Run

Navigate to the frontend folder:
cd frontend

Install dependencies:
npm install

Start the React development server:
npm start

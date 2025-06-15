# 1. Start from a base image with Python 3.11
FROM python:3.11-slim

# 2. Set working directory to root of your project
WORKDIR /app

# 3. Install requirements first to leverage cache
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# 4. Then copy everything into the container
COPY . .

# 5. Set environment variable for settings
ENV DJANGO_SETTINGS_MODULE=backend.backend.settings

# 6. Apply migrations and collect static files
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

# 7. Run the application with Gunicorn
CMD gunicorn backend.backend.wsgi:application --bind 0.0.0.0:8000

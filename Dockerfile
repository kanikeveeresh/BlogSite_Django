# 1. Start from a base image with Python 3.11
FROM python:3.11-slim

# 2. Set working directory
WORKDIR /app

# 3. Install requirements first to leverage Docker cache
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

# 4. Then copy the rest of your code
COPY . .

# 5. Run migrations and collect static files
ENV DJANGO_SETTINGS_MODULE=backend.backend.settings
RUN python manage.py migrate
RUN python manage.py collectstatic --noinput

# 6. Start your application (using Gunicorn in production typically):
CMD gunicorn backend.backend.wsgi:application --bind 0.0.0.0:8000

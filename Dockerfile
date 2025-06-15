FROM python:3.11-slim

WORKDIR /BLOGSITE

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV DJANGO_SETTINGS_MODULE=backend.backend.settings.py


RUN cd backend python manage.py migrate

EXPOSE 8000

CMD gunicorn backend.backend.wsgi:application --bind 0.0.0.0:8000

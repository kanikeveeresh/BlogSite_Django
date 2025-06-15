FROM python:3.11-slim

WORKDIR /backend

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

ENV DJANGO_SETTINGS_MODULE="backend.settings"


RUN python manage.py migrate

EXPOSE 8000

CMD gunicorn backend.backend.wsgi:application --bind 0.0.0.0:8000

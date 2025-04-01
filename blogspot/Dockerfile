# Use the official Python image as a base image
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file first to avoid unnecessary reinstallation of dependencies
COPY requirements.txt /app/

# Install the required dependencies
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Copy the entire project into the container
COPY . /app/

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Expose the port that the app will run on
EXPOSE 8003

# Collect static files (necessary for Django)
RUN python manage.py collectstatic --noinput

# Run database migrations (optional, useful for initialization)
RUN python manage.py migrate

# Start the Django application server using Gunicorn
CMD ["gunicorn", "--bind", "0.0.0.0:8003", "blogspot.wsgi:application"]

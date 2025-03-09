# Use official Python slim image for lightweight deployment
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Install system dependencies (for Python packages needing compilation)
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy dependency requirements
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code into container
COPY ./app ./app

# Expose backend port (FastAPI typically runs on 8000, Flask usually 5000)
EXPOSE 8000

# Run the application with Uvicorn (for FastAPI)
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]

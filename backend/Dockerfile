FROM 192.168.1.130/library/python:3.11-slim
WORKDIR /app
RUN pip install fastapi uvicorn --no-cache-dir
RUN echo 'from fastapi import FastAPI\napp = FastAPI()\n\n@app.get("/health")\n@app.get("/api/health")\ndef health():\n    return {"status": "healthy", "service": "anjo-traders API"}' > main.py
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

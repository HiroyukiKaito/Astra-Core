from fastapi import FastAPI

app = FastAPI(title="Astra-Core Backend", version="1.2.0")

@app.get("/health")
async def health_check():
    return {"status": "ok", "service": "astra-core-backend"}
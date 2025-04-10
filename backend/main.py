from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from models import Base, Name
from database import engine, SessionLocal

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["*"]  # Allow all origins (dev only)
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_methods=["*"],
    allow_headers=["*"]
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/add")
def add_name(name: str, db: Session = Depends(get_db)):
    new_name = Name(name=name)
    db.add(new_name)
    db.commit()
    db.refresh(new_name)
    return {"message": "Name added successfully!"}

@app.get("/fetch")
def fetch_names(db: Session = Depends(get_db)):
    return db.query(Name).all()

from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn
import pandas as pd
import pickle

app = FastAPI()


class BikeInput(BaseModel):
    avg_area_income: float
    avg_area_house_age: int
    avg_area_number_of_rooms: int
    avg_area_number_of_bedrooms: int
    area_population: int


class CarInput(BaseModel):
    avg_area_income: float
    avg_area_house_age: int
    avg_area_number_of_rooms: int
    avg_area_number_of_bedrooms: int
    area_population: int


class RealEstateInput(BaseModel):
    avg_area_income: float
    avg_area_house_age: int
    avg_area_number_of_rooms: int
    avg_area_number_of_bedrooms: int
    area_population: int


class MobileInput(BaseModel):
    avg_area_income: float
    avg_area_house_age: int
    avg_area_number_of_rooms: int
    avg_area_number_of_bedrooms: int
    area_population: int


models = {}
model_files = {
    "bike": "bikesModel.pkl",
    "car": "carsModel.pkl",
    "realEstate": "realEstateModel.pkl",
    "mobile": "mobilesModel.pkl",
}


async def load_models():
    for model_name, model_file in model_files.items():
        with open(model_file, 'rb') as f:
            models[model_name] = pickle.load(f)


@app.post("/predict/{model_name}")
async def predict(model_name: str, details: dict):
    if not models:
        await load_models()
    df = pd.DataFrame([details])
    pred = models[model_name].predict(df)
    return {"prediction": int(pred[0])}

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)

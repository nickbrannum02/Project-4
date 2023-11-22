const url = 'http://127.0.0.1:5000/predict';

let data = {
    "Exercise": 0,
    "Skin_Cancer": 0,
    "Other_Cancer": 0,
    "Depression": 0,
    "Diabetes": 0,
    "Arthritis": 0,
    "Height_(cm)": 150,
    "Weight_(kg)": 52,
    "BMI": 30,
    "Smoking_History": 0,
    "Alcohol_Consumption": 0,
    "Fruit_Consumption": 12,
    "Green_Vegetables_Consumption": 16,
    "FriedPotato_Consumption": 8,
    "Age_Category_18-24": 1,
    "Age_Category_25-29": 0,
    "Age_Category_30-34": 0,
    "Age_Category_35-39": 0,
    "Age_Category_40-44": 0,
    "Age_Category_45-49": 0,
    "Age_Category_50-54": 0,
    "Age_Category_55-59": 0,
    "Age_Category_60-64": 0,
    "Age_Category_65-69": 0,
    "Age_Category_70-74": 0,
    "Age_Category_75-79": 0,
    "Age_Category_80+": 0,
    "Sex_Female": 0,
    "Sex_Male": 1
};

fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(result => console.log(result));
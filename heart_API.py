from flask import Flask, jsonify, request
import pickle
import pandas as pd
import json


#################################################
# Import ML Model
#################################################
loaded_model = pickle.load(open("resources/random_forest_model.pkl",'rb'))
loaded_scaler = pickle.load(open("resources/random_forest_scaler.pkl",'rb'))

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/predict (POST request)<br/>"
    )


@app.route("/predict", methods=['POST'])
def prediction():
     try:
        # Get the data from the JSON request
        data = request.get_json()
        json_data = json.loads(data)
        df = pd.DataFrame(json_data, index = [0])
        
        # Preprocess the data 
        df["Age_Category_18-24"] = 0
        df["Age_Category_25-29"] = 0
        df["Age_Category_30-34"] = 0
        df["Age_Category_35-39"] = 0
        df["Age_Category_40-44"] = 0
        df["Age_Category_45-49"] = 0
        df["Age_Category_50-54"] = 0
        df["Age_Category_55-59"] = 0
        df["Age_Category_60-64"] = 0
        df["Age_Category_65-69"] = 0
        df["Age_Category_70-74"] = 0
        df["Age_Category_75-79"] = 0
        df["Age_Category_80+"] = 0
        df["Sex_Female"] = 0
        df["Sex_Male"] = 0
        df[json_data["age"]] = 1
        df[json_data["sex"]] = 1
        df = df.drop(['age', 'sex'], axis=1)
        #df.to_csv("resources/testdata3.csv")
        #Apply scaling to the data
        scaled_data = loaded_scaler.transform(df)

        # Make predictions using the loaded model
        result = loaded_model.predict(scaled_data)
        
        # Return the predictions as JSON
        return jsonify({"result": result.tolist()})
     except Exception as e:
        return jsonify({"error": str(e)}), 500
        

if __name__ == '__main__':
    app.run(debug=True)
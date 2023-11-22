from flask import Flask, jsonify, request
import pickle
import pandas as pd
import numpy


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
        df = pd.DataFrame(data, index=[0])
        # Preprocess the data (you may need to adjust this based on your model preprocessing)
        scaled_data = loaded_scaler.transform(df)

        # Make predictions using the loaded model
        result = loaded_model.predict(scaled_data)
        
        # Return the predictions as JSON
        return jsonify({"result": result.tolist()})
     except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
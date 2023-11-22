# Project-4

## How to use pickle to save the scaler and the model as .pkl files
#save scaler\
filename = 'resources/random_forest_scaler.pkl'\
pickle.dump(X_scaler, open(filename, 'wb'))

#Save the model to a pickle file for easy access later\
filename = 'resources/random_forest_model.pkl'\
pickle.dump(rf_model, open(filename, 'wb'))

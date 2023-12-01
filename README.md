# Project-4
##Introduction
For our final project we chose to build a machine learning model that can predict whether someone is high risk for cardiovascular disease or not. To build this model we utilized data that was collected on over 200,000 individuals from a list of health-related survey questions. Finally, we deployed our machine learning model to a website so that anyone can fill out the survey questions for themselves and get their prediction.

##Conclusions
Overall, we were unable to find a satisfactory machine learning model to predict heart disease.
Even though the models give very high accuracy, the problem is that the models are really bad at predicting if people are high risk for heart disease (ie high false negative rate)
This elaborates the difficulty of using machine learning for predicting health issues and how important it is to have models with high precision not just high accuracy when it comes to making medical diagnoses.
Due to this data being unbalanced with not enough entries of people with cardiovascular disease, we would like to find additional data of people with this disease to help balance the data better and increase our accuracy

## How to use pickle to save the scaler and the model as .pkl files
#save scaler\
filename = 'resources/random_forest_scaler.pkl'\
pickle.dump(X_scaler, open(filename, 'wb'))

#Save the model to a pickle file for easy access later\
filename = 'resources/random_forest_model.pkl'\
pickle.dump(rf_model, open(filename, 'wb'))

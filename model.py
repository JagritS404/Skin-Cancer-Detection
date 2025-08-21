from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
import os
from glob import glob
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

from tensorflow.keras.models import load_model
model=load_model('modelnew.h5')

from tensorflow.keras.layers import Input
input_layer = Input(shape=(100, 125, 3))  # Explicitly set the expected input shape

list = [
    'Actinic keratoses',
    'Basal cell carcinoma',
    'Benign keratosis-like lesions ',
    'Dermatofibroma',
    'Melanocytic nevi',
    'Melanoma',
    'Vascular lesions'
    ]

@app.route('/')
def index():
    return "Image Size Prediction Server"

@app.route('/get_image_size', methods=['POST'])
def get_image_size():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file uploaded'}), 400

    file = request.files['image']
    try:
        # Open the image using PIL
        image = Image.open(file.stream)
        resized_image = image.resize((125,100))
        x=np.asarray(resized_image)

        x = np.asarray(x.tolist())
        x = (x - 159.9)/46.39

        x= x.reshape(1, *(100, 125, 3))
        x = x.reshape(1,125*100*3)
        x=x/255.0
        single_image = x.reshape(100,125,3)  # Example input
        single_image = np.expand_dims(single_image, axis=0)  # Add batch dimension
        prediction = model.predict(single_image)
        prediction.argmax().item()
        string=list[prediction.argmax().item()]

        x=np.asarray(resized_image)
        width, height = 100,125
        msg=string
        return jsonify({'width': width, 'height': height,'message':msg})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
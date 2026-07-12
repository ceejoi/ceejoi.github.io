from flask import Flask, request, jsonify
from flask_cors import CORS
import serial
import time

PORT = "COM5"

arduino = serial.Serial(PORT, 9600, timeout=1)
time.sleep(2)
arduino.reset_input_buffer()

app = Flask(__name__)
CORS(app)

@app.route("/send", methods=["POST"])
def send():
    data = request.get_json()
    message = data.get("message", "")
    print("Received: ", message)
    arduino.write((message + "\n").encode())
    print("Sent to Arduino!")
    
    return jsonify({"status": "success"})

@app.route("/")
def home():
    return "HeartLink Server is running."

arduino.write(b"Hello from Python!\n")
print("Test message sent!")
app.run(host="0.0.0.0", port=5000)
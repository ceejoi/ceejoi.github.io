# ❤️ HeartLink

HeartLink is an Internet-connected messaging system built using an **Arduino Uno**, **Flask**, **GitHub Pages**, and **Cloudflare Tunnel**. It allows users to send messages from a web browser to a physical Arduino device, where they are displayed on a 16×2 I2C LCD in real time.

This project was built to explore the integration of web development, backend programming, networking, and embedded systems into a single IoT application.

---

## ✨ Features

- 🌐 Retro terminal-style web interface
- 📤 Send messages from anywhere through a web browser
- 🔒 Secure communication using Cloudflare Tunnel
- ⚡ Real-time message delivery
- 📟 16×2 I2C LCD message display
- 🐱 Fun terminal animations (bouncing cats and dogs)
- 🖥️ REST API built with Flask
- 🔌 USB Serial communication between Python and Arduino

---

## 🏗️ System Architecture

```
           Browser (GitHub Pages)
                    │
               HTTP POST
                    │
                    ▼
           Cloudflare Tunnel
                    │
                    ▼
           Flask Python Server
                    │
          USB Serial (9600 baud)
                    │
                    ▼
              Arduino Uno
                    │
                    ▼
             16×2 I2C LCD Display
```

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- GitHub Pages

### Backend
- Python
- Flask
- Flask-CORS
- PySerial

### Hardware
- Arduino Uno
- 16×2 I2C LCD
- USB Serial Communication

### Networking
- HTTP REST API
- JSON
- Cloudflare Tunnel

---

## 📂 Project Structure

```
HeartLink/
│
├── website/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server/
│   ├── heartlink.py
│   └── requirements.txt
│
├── arduino/
│   └── HeartLink.ino
│
└── README.md
```

---

## ⚙️ How It Works

1. A user opens the HeartLink website.
2. The user types a message and clicks **TRANSMIT**.
3. JavaScript sends the message as a JSON POST request.
4. Cloudflare Tunnel securely forwards the request to the local Flask server.
5. Flask extracts the message and sends it through the Arduino's serial port.
6. The Arduino receives the message and displays it on the LCD.

---

## Example API Request

```http
POST /send
Content-Type: application/json
```

```json
{
    "message": "Good luck on your exam!"
}
```

Example response:

```json
{
    "status": "success"
}
```

---

## Hardware Connections

| LCD | Arduino Uno |
|------|-------------|
| GND | GND |
| VCC | 5V |
| SDA | A4 |
| SCL | A5 |

---

## Installation

### Clone the repository

```bash
git clone https://github.com/ceejoi/HeartLink.git
```

---

### Install Python dependencies

```bash
pip install -r requirements.txt
```

---

### Start the Flask server

```bash
python heartlink.py
```

---

### Start Cloudflare Tunnel

```bash
cloudflared tunnel --url http://localhost:5000
```

---

### Upload the Arduino sketch

Open the `arduino` folder using the Arduino IDE and upload the sketch to your Arduino Uno.

---

## Future Improvements

- Read receipts
- User authentication
- Message history
- OLED display support
- Wi-Fi enabled microcontroller (ESP32)
- Mobile-friendly interface
- Custom LCD animations
- Physical enclosure
- RGB notification LEDs
- Buzzer notifications

---

## What I Learned

This project helped me gain practical experience in:

- Embedded systems programming
- Arduino serial communication
- REST API development with Flask
- Frontend web development
- JavaScript Fetch API
- Cloudflare Tunnel
- HTTP and JSON communication
- CORS configuration
- Debugging hardware/software integration
- Full-stack IoT application development

---

## Screenshots

![HeartLink](assets/Terminal.jpg)
---

## License

This project is open source and available under the MIT License.

---

## Author

**Christopher John Ablitas**

Agricultural and Biosystems Engineering Student

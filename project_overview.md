# SignDetectionCVProject Overview

This project is a Computer Vision-based Sign Detection system that integrates hand gesture recognition with face authentication and automated notifications.

## 🚀 Features

- **Face Authentication**: Ensures only authorized users can interact with the system using gestures.
- **Real-time Hand Tracking**: Detects and tracks hand movements with high precision.
- **Gesture Classification**: Recognizes specific hand signs to trigger pre-defined actions.
- **Automated Actions**:
  - **Hello**: Captures a screenshot and provides a vocal welcome.
  - **Help-Cleaner**: Sends an SMS alert for cleaning assistance.
  - **Help-Technician**: Initiates a phone call for technical support.
  - **Yes/Cancel**: Provides vocal confirmation and logs interactions.
- **Vocal Feedback**: Uses Text-to-Speech (TTS) to interact with the user.
- **Interaction Logging**: Automatically logs all user actions into an Excel-based system for auditing.

## 🛠️ Tech Stack

- **Languages**: Python
- **Computer Vision**: OpenCV, `cvzone` (HandTrackingModule, ClassificationModule), `face_recognition`
- **Machine Learning**: TensorFlow/Keras (Model classification)
- **APIs & Services**: Twilio (SMS and Voice Calls)
- **Utilities**: `pyttsx3` (TTS), `pyautogui` (Screenshots), `pandas` (Excel logging), `numpy`

## 🔄 Project Flow

1. **Initialization**:
   - Load pre-trained Keras model and labels.
   - Load face encodings for authorized personnel.
2. **Phase 1: Authentication**:
   - System monitors the webcam for a known face.
   - Upon successful identification, it grants access and provides a vocal welcome.
3. **Phase 2: Gesture Recognition**:
   - Tracks the user's hand.
   - Pre-processes the hand image (crop, resize, normalize) for the classifier.
   - Predicts the gesture based on the pre-trained model.
4. **Phase 3: Action Execution**:
   - If a gesture is consistently detected (above a threshold), the corresponding action (SMS, Call, Screenshot, or Speech) is triggered.
   - The interaction is logged with a timestamp and user ID.

## 📁 Directory Structure

- `Data/`: Contains training data groups (e.g., "Yes", "Hello").
- `Model/`: Stores the `keras_model.h5` and `labels.txt`.
- `People/`: Stores images of authorized users for face recognition.
- `user_logs/`: Contains the interaction history in `user_interactions.xlsx`.
- `collectdata.py`: Script for capturing and saving new gesture data.
- `test.py`: Main application script with face authentication and gestures.
- `without_face.py`: Alternative application script skipping face authentication.
- `user_log.py`: Utility module for logging interactions.

---
*Created by Antigravity AI Assistant*

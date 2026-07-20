# Ore-Detection-using-DL

A Hybrid Multimodal Intelligent Ore Classification System for non-destructive identification of five mineral classes — **Pyrite, Chalcopyrite, Hematite, Magnetite, and Bornite** — by fusing RGB imagery, microscopic textures, infrared spectral signatures, acoustic resonance signals, and capacitive electrical measurements.

## Overview

Conventional ore characterization methods such as X-ray diffraction and wet chemical assaying are accurate but destructive, slow, and unsuited to real-time industrial monitoring. This project proposes a deep learning based multimodal pipeline that classifies ore type and predicts elemental composition simultaneously, in real time, without damaging the sample.

## Key Features

- **Multimodal Data Fusion** — combines RGB images, microscopic imagery, infrared spectra, acoustic resonance, and capacitive electrical readings
- **Ensemble Image Classification** — EfficientNet, ResNet, and MobileNet CNNs combined with a Vision Transformer for local and global feature extraction
- **Dual Prediction Head** — simultaneous 5-class ore classification (Softmax) and multi-label elemental composition regression (Sigmoid)
- **Synthetic Data Augmentation** — Conditional GANs generate compositionally conditioned synthetic samples
- **Fuzzy Logic Inference Layer** — manages prediction uncertainty using linguistic membership functions
- **Explainable AI** — SHAP and Grad-CAM for feature-level interpretability
- **LLM Explanation Module** — converts model outputs into natural language explanations for non-technical users
- **IoT Edge-to-Cloud Deployment** — Raspberry Pi edge acquisition with a Dockerized cloud backend
- **Real-Time Dashboard** — Next.js frontend for classification results, sensor telemetry, and historical analytics

## System Architecture

```
Ore Sample → Analysis Chamber (Raspberry Pi + Sensors)
    ↓
Multi-Modality Data Capture (RGB, Microscopic, IR, Acoustic, Capacitive)
    ↓
Edge Preprocessing (resize/normalize images, spectrogram conversion, sensor normalization)
    ↓
Cloud Backend (FastAPI) → Multimodal AI Model
    ├── Image Branch: Ensemble CNN (EfficientNet, ResNet) + ViT
    ├── Acoustic Branch: CNN
    └── Sensor Branch: Dense Layers
    ↓
Multimodal Fusion Layer → Fully Connected Layers
    ↓
Ore Classification Head (Softmax) + Element Prediction Head (Sigmoid)
    ↓
Fuzzy Logic Inference → Refined Prediction
    ↓
LLM Explanation Layer → Natural Language Report
    ↓
Next.js Dashboard (Ore Type, Confidence Scores, Element Charts, Sensor Readings)
```

## Tech Stack

**Frontend**
- Next.js

**Backend**
- FastAPI (Python)
- Poetry (dependency management)

**Machine Learning**
- TensorFlow
- EfficientNet, ResNet, MobileNet, Vision Transformer
- Conditional GANs
- SHAP, Grad-CAM
- Optuna (hyperparameter tuning)
- MLflow (experiment tracking)
- Polars (data processing)

**Deployment**
- Docker
- Raspberry Pi (edge device)

## Target Mineral Classes

| Mineral | Chemical Formula |
|---|---|
| Pyrite | FeS₂ |
| Chalcopyrite | CuFeS₂ |
| Hematite | Fe₂O₃ |
| Magnetite | Fe₃O₄ |
| Bornite | Cu₅FeS₄ |

## Project Status

This project is currently in **Phase 1**: system design and methodology formulation. Phase 2 will cover empirical implementation — dataset collection, model training, and validation — targeting classification accuracy above 90% and elemental prediction error below 5%.

## Project Structure

```
Ore-Classification/
├── backend/     # FastAPI + Poetry
├── frontend/    # Next.js dashboard
└── README.md
```

## Getting Started

### Backend
```bash
cd backend
poetry install
poetry run uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Contributors

- Durgesh A P
- Keerthana
- Neekshith

**Department of Computer Science and Engineering**
A. J. Institute of Engineering and Technology (AJIET), Mangaluru
AY 2025–26
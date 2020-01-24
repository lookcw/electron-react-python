import sys
import numpy as np
from pearson_features import extractFeatures
from predict_with_model import predict_patient, get_fft
import json

input_filename = sys.argv[1]
eeg_time_series = np.loadtxt(
    open(input_filename, "rb"), delimiter=",", skiprows=1)

(prediction, conf, heatmap) = predict_patient(
    'models/dev.joblib', eeg_time_series)
(fft_electrodes, freq, yf_mat) = get_fft(eeg_time_series)

output = {'prediction': prediction,
          'conf': max(conf),
          'heatmap': heatmap,
          'fft': {
              'electrodes': fft_electrodes,
              'freq': freq.tolist(),
              'yfMat': yf_mat.tolist()}
          }
# print(f'predicton: {type(prediction)} conf:{type(conf)} heatmap:{type(heatmap)}')
print(json.dumps(output))


sys.stdout.flush()

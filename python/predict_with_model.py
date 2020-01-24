from joblib import load
from pearson_features import extractFeatures
import numpy as np
import os
from scipy.fftpack import fft, ifft, fftfreq, fftshift



NUM_TO_PREDICTION = {
    0:'Healthy',
    1:'Alzheimer\'s'
}

ELECTRODES_TO_FFT = [1,4]

def predict_patient(model_filename, eeg_time_series):
    clf = load('src/' + model_filename)
    num_electrodes = len(eeg_time_series[0])
    eeg_features = extractFeatures(eeg_time_series)
    y = clf.predict([eeg_features])
    prob = clf.predict_proba([eeg_features])
    heatmap = np.zeros((num_electrodes, num_electrodes))
    heatmap[np.triu_indices(num_electrodes, 1)] = [-1] * len(eeg_features)
    heatmap[np.tril_indices(num_electrodes, -1)] = eeg_features[::-1]
    return (NUM_TO_PREDICTION[int(y[0])], max(prob.tolist()), heatmap.tolist())


def get_fft(eeg_time_series):
    flat_mat = eeg_time_series.transpose()    
    Fs = 250.0  # sampling rate
    N = len(flat_mat[0]) # number of timepoints in electrode
    freq = np.arange(0, Fs/2, Fs/N)[::100]
    yf_mat = np.zeros((len(ELECTRODES_TO_FFT),len(freq)))
    count = 0
    for elec in ELECTRODES_TO_FFT:
        yf = fft(flat_mat[elec])
        yf_mat[count] = yf[0:int((N+1)/2)][::100].real  # get useable half of the fft vector
        count += 1
    return (ELECTRODES_TO_FFT, freq, yf_mat)

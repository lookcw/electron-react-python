import os
import sys
import pandas as pd
from pandas import DataFrame


def extractFeatures(time_series_electrode, config_feature={}):
    eegMat = pd.DataFrame(data=time_series_electrode)
    numElectrodes = len(eegMat.columns)
    features = [None] * int(numElectrodes * (numElectrodes - 1)/2)
    featuresI = 0
    for i in range(numElectrodes):
        for j in range(i+1, numElectrodes):
            features[featuresI] = eegMat.iloc[:, i].corr(eegMat.iloc[:, j])
            featuresI += 1
    return features


def config_to_filename(config_feature):
    return ''

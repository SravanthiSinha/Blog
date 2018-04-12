#!/usr/bin/env python3
import os.path
import json


def getFolders(path):
    return [d for d in os.listdir(path) if os.path.isdir(os.path.join(path, d))]


def getFiles(path):
    return [d for d in os.listdir(path) if os.path.isfile(os.path.join(path, d))]


def getFilesSources(path, category, album):
    return [category + '/' + album + '/' + d for d in os.listdir(path) if os.path.isfile(os.path.join(path, d))]


pathToImagesCategories = '../images/categories'
categories = json.load(open('../data/categories.json'))["categories"]

dirPath = "../data/categories"
fileList = os.listdir(dirPath)
for fileName in fileList:
 os.remove(dirPath+"/"+fileName)

albums = dict()
files = dict()


for category in categories:
    albums[category] = getFolders(pathToImagesCategories + '/' + category)

for category in categories:
    for album in albums[category]:
        files[album] = getFilesSources(
            pathToImagesCategories + '/' + category + '/' + album, category, album)


for category in categories:
    datum = {}
    datum['category'] = category
    dat_album_array = []
    for album in albums[category]:
        dat_album = {}
        dat_album['name'] = album
        dat_album['files'] = files[album]
        dat_album['poster'] = [k for k in files[album] if 'cover' in k][0]
        dat_album_array.append(dat_album)
    datum['albums'] = dat_album_array
    with open('../data/categories/' + category + '.json', 'w') as outfile:
        json.dump(datum, outfile, sort_keys=False,
                  indent=4, separators=(',', ': '))

/**
 * The examples provided by Oculus are for non-commercial testing and
 * evaluation purposes only.
 *
 * Oculus reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL
 * OCULUS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * Example ReactVR app that allows a simple tour using linked 360 photos.
 */
'use strict';

import React from 'react';
import { AppRegistry, asset, Image, Pano, Text, Sound, View } from 'react-360';


import ModalView from './ModalView';
import TourSample from './TourSample';

// Web VR is only able to support a maxiumum texture resolution of 4096 px
const MAX_TEXTURE_WIDTH = 4096;
const MAX_TEXTURE_HEIGHT = 720;
// Cylinder is a 2D surface a fixed distance from the camera.
// It uses pixes instead of meters for positioning components.
// pixels = degrees/360 * density, negative to rotate in expected direction.
const degreesToPixels = degrees => -(degrees / 360) * MAX_TEXTURE_WIDTH;
// PPM = 1/(2*PI*Radius) * density. Radius of cylinder is 3 meters.
const PPM = 1 / (2 * Math.PI * 3) * MAX_TEXTURE_WIDTH;


AppRegistry.registerComponent('TourSample', () => TourSample);
AppRegistry.registerComponent('ModalView', () => ModalView);

'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import openPopUp from './modules/openPopUp';
//import formsToSend from './modules/sendForm';
import mainSlider from './modules/mainSlider';
// import servicesSlider from './modules/servicesSlider';
import gallerySlider from './modules/gallerySlider';
import calc from './modules/calc';
import getSailAnchor from './modules/getSailAnchor';

//formsToSend();
getSailAnchor();
openPopUp();


mainSlider();
// servicesSlider();
gallerySlider();

calc();
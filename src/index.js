'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import headMenu from './modules/headMenu';

import openPopUp from './modules/openPopUp';
import formsToSend from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import servicesSlider from './modules/servicesSlide';
import gallerySlider from './modules/gallerySlider';
import calc from './modules/calc';
import getSailAnchor from './modules/getSailAnchor';
import scrollTop from './modules/scrollTop';

import burgerMenu from './modules/burgerMenu';

headMenu();
formsToSend();
getSailAnchor();
openPopUp();
scrollTop();
burgerMenu();

mainSlider();
servicesSlider();
gallerySlider();

calc();
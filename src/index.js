import webpackImage from './webpack-image.jpg'

function generate() {
    let image = document.createElement('img');
    image.src = webpackImage;
    document.getElementsByTagName('body')[0].appendChild(image);
}


generate();
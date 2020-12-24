let image = document.getElementById('img');
let images = ['za-granyu.jpg', 'xydeu.jpg'];
let a = 0;

function SetImage() {
    if (a == 0) {
        image.setAttribute('src', images[0]);
        a = 1;
        } else {
            image.setAttribute('src', images[1]);
            a = 0;
            }
 
        }
        setInterval(SetImage, 1000);

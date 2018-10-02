window.onload = function () {
    var block = document.querySelector('.block');
    var ox, oy;
    
    block.addEventListener("mousedown", function (event) {
        ox = event.offsetX;
        oy = event.offsetY;
        document.addEventListener('mousemove', onMouseMove);        
    });
    // console.dir(document.querySelector(".outer"));

    document.addEventListener("mouseup", function (event) {
        document.removeEventListener('mousemove', onMouseMove);        
    });

    function onMouseMove(event) {
        block.style.left = event.clientX - ox + 'px';
        block.style.top = event.clientY - oy + 'px';
    }

    // ----------------------------------------------------------------------
    var green = document.querySelector('.green');
    var number, range, val;


    range = document.querySelector('.range')
        range.addEventListener('change', function (event) {
            number.value = event.target.value;
            green.style.height = event.target.value + 'px';
            red.style.height = style(val);                       
            val = range.value;
            console.log(event.type, event);            
        });

    number = document.querySelector('.number')
        number.addEventListener('change', function (event) {
            range.value = event.target.value;
            green.style.height = event.target.value + 'px'; 
            red.style.height = style(val);
            val = number.value;                       
            console.log(event.type, event); 
        });
    var red = document.querySelector('.red')
    
    function style (val) {
        if (0 <= val < 20) {
           return red.style.height = 5 + '%';
        }else if (20 < val < 50) {
            return red.style.height = 10 + '%';
        }else if (50 < val < 75) {
            return red.style.height = 14 + '%';
        }else if (75 < val < 100) {
            return red.style.height = 20 + '%';
        }
    }
    
}
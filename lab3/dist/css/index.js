

// 1
let tmp = document.querySelector('#section-5').innerHTML;
document.querySelector('#section-5').innerHTML = document.querySelector('#section-4').innerHTML;
document.querySelector('#section-4').innerHTML = tmp;
// 2 
let thirdSect = document.querySelector('#section-3');
let a = 3, b = 4, c = 5, p = (a + b + c)/2;

let square = Math.sqrt(p*(p-a)*(p-b)*(p-c));
thirdSect.append('Square - ' + square + ' sm^2');
// 3
function clickMe() {
    let first = document.querySelector('#input1').value;
    let second = document.querySelector('#input2').value;
    let third = document.querySelector('#input3').value;
    let forth = document.querySelector('#input4').value;
    let fifth = document.querySelector('#input5').value;
    let sixth = document.querySelector('#input6').value;
    let seventh = document.querySelector('#input7').value;
    let eighth = document.querySelector('#input8').value;
    let nineth = document.querySelector('#input9').value;
    let tenth = document.querySelector('#input10').value;
    
    let mass = [first, second, third, forth, fifth, sixth, seventh, eighth, nineth, tenth];
    alert('The biggest number is ' + Math.max(...mass));
}

// 4
if(window.localStorage)
{
    if(localStorage.getItem('check') == null) {localStorage.setItem('check',0);}
    else if(localStorage.getItem('check') == 0) {document.querySelector('#section-6').style.fontWeight = 'normal';}
        else {document.querySelector('#section-6').style.fontWeight = 'bold';}
}   
else alert(" localStorage cant be used");
{
    function clickMeBold() {
        if (document.querySelector('#medblod').checked === true){
            localStorage.setItem('check',0);
            document.querySelector('#section-6').style.fontWeight = 'normal';
        }
        if (document.querySelector('#medblod').checked === false){
            localStorage.setItem('check',1);
            document.querySelector('#section-6').style.fontWeight = 'bold';
        }
    }
}


// 5
window.addEventListener('scroll', function() {
    document.querySelector('#section-4').innerHTML  += 'Scroll ';
    if ( pageYOffset > 250){
        document.querySelector('#section-4').innerHTML  = "";
    }
  });
// 6

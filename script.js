console.log('------------------#3.1');
$('.test').css('color', 'red');

console.log('------------------#3.2');
$('h2').css('color', 'red');

console.log('------------------#3.3');
$('p + p').css('color', 'red');

console.log('------------------#3.4');
$('li + li.www').css('color', 'red');

console.log('------------------#3.5');
$('h2 i').css('color', 'red');

console.log('------------------#3.6');
$('h2 > i').css('color', 'red');

console.log('------------------#4.1');
$('h2:not(.test)').css('color', 'red');

console.log('------------------#4.2');
$(':header:not(.test)').css('color', 'red');

console.log('------------------#4.3');
$(':header + :header').css('color', 'red');

console.log('------------------#4.4');
$(':header.test + :header.test').css('color', 'red');
// need to set up local storage on save click

$('saveBtn').on('click', function(event){
    event.preventDefault();
})
$('eight').focusout(function(){
    var eight = {
        text: $('#eight').val()
    }
    console.log(eight);
})
$('#nine').focusout(function(){
    var nine = {
        text: $('#nine').val()
    }
    console.log(nine);
})
$('#ten').focusout(function(){
    var ten = {
        text: $('#ten').val()
    }
    console.log(ten);
})
$('#eleven').focusout(function(){
    var eleven = {
        text: $('#eleven').val()
    }
    console.log(eleven);
})
$('#twelve').focusout(function(){
    var twelve = {
        text: $('#twelve').val()
    }
    console.log(twelve);
})
$('#one').focusout(function(){
    var one = {
        text: $('#one').val()
    }
    console.log(one);
})
$('#two').focusout(function(){
    var two = {
        text: $('#two').val()
    }
    console.log(two);
})
$('#three').focusout(function(){
    var three = {
        text: $('#three').val()
    }
    console.log(three);
})
$('#four').focusout(function(){
    var four = {
        text: $('#four').val()
    }
    console.log(four);
})
$('#five').focusout(function(){
    var five = {
        text: $('#five').val()
    }
    console.log(five);
})
$('#six').focusout(function(){
    var six = {
        text: $('#six').val()
    }
    console.log(six);
})
$('#currentDay').text(moment().format('dddd'));
//apply class based on if hour is past present future
// example setting tiome console.log(moment("01:15:00 PM", "h:mm:ss A").format("HH:mm:ss"));
console.log(moment('8 AM', 'h A').format("HH"));

rowEight = moment('8 AM', 'h A').format("HH");
rowNine = moment('9 AM', 'h A').format("HH");
rowTen = moment('10 AM', 'h A').format("HH");
rowEleven = moment('11 AM', 'h A').format("HH");
rowTwelve = moment('12 AM', 'h A').format("HH");
rowOne = moment('1 PM', 'h A').format("HH");
rowTwo = moment('2 PM', 'h A').format("HH");
rowThree = moment('3 PM', 'h A').format("HH");
rowFour = moment('4 PM', 'h A').format("HH");
rowFive = moment('5 PM', 'h A').format("HH");
rowSix = moment('6 PM', 'h A').format("HH");
console.log(moment().format('HH'));

if (moment().format('HH')<rowEight) {
    console.log('test');
    $('#rowEigh').addClass('future');
    $('#eight').addClass('future')
}else if (moment().format('HH') == rowEight) {
    $('#rowEight').addClass('present');
    $('#eight').addClass('present');
}else{
    $('#rowEight').addClass('past');
    $('#eight').addClass('past');
}
if (moment().format('HH')<rowNine) {
    console.log('test2');
    $('#rowNine').addClass('future');
    $('#nine').addClass('future')
}else if (moment().format('HH') == rowNine) {
    $('#rowNine').addClass('present');
    $('#nine').addClass('present');
}else{
    $('#rowNINE').addClass('past');
    $('#nine').addClass('past');
}
if (moment().format('HH')<rowTen) {
    console.log('test3');
    $('#rowTen').addClass('future');
    $('#ten').addClass('future')
}else if (moment().format('HH') == rowTen) {
    $('#rowTen').addClass('present');
    $('#ten').addClass('present');
}else{
    $('#rowTen').addClass('past');
    $('#ten').addClass('past');
}
if (moment().format('HH')<rowEleven) {
    console.log('test4');
    $('#rowEleven').addClass('future');
    $('#eleven').addClass('future')
}else if (moment().format('HH') == rowEleven) {
    $('#rowEleven').addClass('present');
    $('#eleven').addClass('present');
}else{
    $('#rowEleven').addClass('past');
    $('#eleven').addClass('past');
}
if (moment().format('HH')<rowTwelve) {
    console.log('test5');
    $('#rowTwelve').addClass('future');
    $('#twelve').addClass('future')
}else if (moment().format('HH') == rowTwelve) {
    $('#rowTwelve').addClass('present');
    $('#Twelve').addClass('present');
}else{
    $('#rowTwelve').addClass('past');
    $('#twelve').addClass('past');
}
if (moment().format('HH')<rowOne) {
    console.log('test6');
    $('#rowOne').addClass('future');
    $('#one').addClass('future')
}else if (moment().format('HH') == rowOne) {
    $('#rowOne').addClass('present');
    $('#one').addClass('present');
}else{
    $('#rowOne').addClass('past');
    $('#one').addClass('past');
}
if (moment().format('HH')<rowTwo) {
    console.log('test7');
    $('#rowTwo').addClass('future');
    $('#two').addClass('future')
}else if (moment().format('HH') == rowTwo) {
    $('#rowTwo').addClass('present');
    $('#two').addClass('present');
}else{
    $('#rowTwo').addClass('past');
    $('#two').addClass('past');
}
if (moment().format('HH')<rowThree) {
    console.log('test8');
    $('#rowThree').addClass('future');
    $('#three').addClass('future')
}else if (moment().format('HH') == rowThree) {
    $('#rowThree').addClass('present');
    $('#three').addClass('present');
}else{
    $('#rowThree').addClass('past');
    $('#three').addClass('past');
}
if (moment().format('HH')<rowFour) {
    console.log('test9');
    $('#rowFour').addClass('future');
    $('#four').addClass('future')
}else if (moment().format('HH') == rowFour) {
    $('#rowFour').addClass('present');
    $('#four').addClass('present');
}else{
    $('#rowFour').addClass('past');
    $('#four').addClass('past');
}
if (moment().format('HH')<rowFive) {
    console.log('test10');
    $('#rowFive').addClass('future');
    $('#five').addClass('future')
}else if (moment().format('HH') == rowFive) {
    $('#rowFive').addClass('present');
    $('#five').addClass('present');
}else{
    $('#rowFive').addClass('past');
    $('#five').addClass('past');
}
if (moment().format('HH')<rowSix) {
    console.log('test11');
    $('#rowSix').addClass('future');
    $('#six').addClass('future')
}else if (moment().format('HH') == rowSix) {
    $('#rowSix').addClass('present');
    $('#six').addClass('present');
}else{
    $('#rowSix').addClass('past');
    $('#six').addClass('past');
}
// need to set up local storag
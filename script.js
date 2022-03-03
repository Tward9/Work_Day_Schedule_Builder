//fills tabel from local storage if something saved
if (localStorage.getItem('rowEightText')) {
    var eight = {
        text: localStorage.getItem('rowEightText')
    }
    $('#eight').val(eight.text);
}
if (localStorage.getItem('rowNineText')) {
    var nine = {
        text: localStorage.getItem('rowNineText')
    }
    $('#nine').val(nine.text);
}
if (localStorage.getItem('rowTenText')) {
    var ten = {
        text: localStorage.getItem('rowTenText')
    }
    $('#ten').val(ten.text);
}
if (localStorage.getItem('rowElevenText')) {
    var eleven = {
        text: localStorage.getItem('rowElevenText')
    }
    $('#eleven').val(eleven.text);
}
if (localStorage.getItem('rowTwelveText')) {
    var twelve = {
        text: localStorage.getItem('rowTwelveText')
    }
    $('#twelve').val(twelve.text);
}
if (localStorage.getItem('rowOneText')) {
    var one = {
        text: localStorage.getItem('rowOneText')
    }
    $('#one').val(one.text);
}
if (localStorage.getItem('rowTwoText')) {
    var two = {
        text: localStorage.getItem('rowTwoText')
    }
    $('#two').val(two.text);
}
if (localStorage.getItem('rowThreeText')) {
    var three = {
        text: localStorage.getItem('rowThreeText')
    }
    $('#three').val(three.text);
}
if (localStorage.getItem('rowFourText')) {
    var four = {
        text: localStorage.getItem('rowFourText')
    }
    $('#four').val(four.text);
}
if (localStorage.getItem('rowFiveText')) {
    var five = {
        text: localStorage.getItem('rowFiveText')
    }
    $('#five').val(five.text);
}
if (localStorage.getItem('rowSixText')) {
    var six = {
        text: localStorage.getItem('rowSixText')
    }
    $('#six').val(six.text);
}

//stores text as variable when you leave a text area on the table
$('#eight').focusout(function(){
    $('#formEight').on('submit', function(event){
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem('rowEightText', eightText);
    })
    var eight = {
        text: $('#eight').val()
    }
    console.log(eight);
    var eightText = eight.text;
    console.log(eightText);
    return eight, eightText;
})
$('#nine').focusout(function(event){
    $('#formNine').on('submit', function(event){
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem('rowNineText', nineText);
    })
    var nine = {
        text: $('#nine').val()
    }
    console.log(nine);
    var nineText = nine.text;
    console.log(nineText);
    return nineText;
})
$('#ten').focusout(function(){
    $('#formTen').on('submit', function(event){
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem('rowTenText', tenText);
    })
    var ten = {
        text: $('#ten').val()
    }
    console.log(ten);
    var tenText = ten.text;
    console.log(tenText);
    return tenText;
})
$('#eleven').focusout(function(){
    $('#formEleven').on('submit', function(event){
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem('rowElevenText', elevenText);
    })
    var eleven = {
        text: $('#eleven').val()
    }
    console.log(eleven);
    var elevenText = eleven.text;
    console.log(elevenText);
    return elevenText;
})
$('#twelve').focusout(function(){
    $('#formTwelve').on('submit', function(event){
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem('rowTwelveText', twelveText);
    })
    var twelve = {
        text: $('#twelve').val()
    }
    console.log(twelve);
    var twelveText = twelve.text;
    console.log(twelveText);
    return twelveText;
})
$('#one').focusout(function(){
    $('#formOne').on('submit', function(event){
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem('rowOneText', oneText);
    })
    var one = {
        text: $('#one').val()
    }
    console.log(one);
    var oneText = one.text;
    console.log(oneText);
    return oneText;
})
$('#two').focusout(function(){
    $('#formTwo').on('submit', function(event){
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem('rowTwoText', twoText);
    })
    var two = {
        text: $('#two').val()
    }
    console.log(two);
    var twoText = two.text;
    console.log(twoText);
    return two;
})
$('#three').focusout(function(){
    $('#formThree').on('submit', function(event){
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem('rowThreeText', threeText);
    })
    var three = {
        text: $('#three').val()
    }
    console.log(three);
    var threeText = three.text;
    console.log(threeText);
    return threeText;
})
$('#four').focusout(function(){
    $('#formFour').on('submit', function(event){
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem('rowFourText', fourText);
    })
    var four = {
        text: $('#four').val()
    }
    console.log(four);
    var fourText = four.text;
    console.log(fourText);
    return fourText;
})
$('#five').focusout(function(){
    $('#formFive').on('submit', function(event){
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem('rowFiveText', fiveText);
    })
    var five = {
        text: $('#five').val()
    }
    console.log(five);
    var fiveText = five.text;
    console.log(fiveText);
    return fiveText;
})
$('#six').focusout(function(){
    $('#formSix').on('submit', function(event){
        event.preventDefault();
        console.log('submitting');
        localStorage.setItem('rowSixText', sixText);
    })
    var six = {
        text: $('#six').val()
    }
    console.log(six);
    var sixText = six.text;
    console.log(sixText);
    return sixText;
})
$('#currentDay').text(moment().format('dddd'));
// example setting tiome console.log(moment("01:15:00 PM", "h:mm:ss A").format("HH:mm:ss"));
// console.log(moment('8 AM', 'h A').format("HH"));

//give each row an hours moment
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
//apply class based on if hour is past present future
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
    $('#rowNine').addClass('past');
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
// need to set up local storage on save click

$('.table').on('click', function(event){
    // event.preventDefault();
    console.log(event.target);
    
    console.log(event.target.parentElement.parentElement.id);
    if (event.target.parentElement.parentElement.id === 'rowEight') {
        console.log('rowEight');
        $('#formEight').submit();
    }else if (event.target.parentElement.parentElement.id === 'rowNine') {
        console.log('rowNine');
        $('#formNine').submit();
    }else if (event.target.parentElement.parentElement.id === 'rowTen') {
        console.log('rowTen');
        $('#formTen').submit();
    }else if (event.target.parentElement.parentElement.id === 'rowEleven') {
        console.log('rowEleven');
        $('#formEleven').submit();
    }else if (event.target.parentElement.parentElement.id === 'rowTwelve') {
        console.log('rowTwelve');
        $('#formTwelve').submit();
    }else if (event.target.parentElement.parentElement.id === 'rowOne') {
        console.log('rowOne');
        $('#formOne').submit();
    }else if (event.target.parentElement.parentElement.id === 'rowTwo') {
        console.log('rowTwo');
        $('#formTwo').submit();
    }else if (event.target.parentElement.parentElement.id === 'rowThree') {
        console.log('rowThree');
        $('#formThree').submit();
    }else if (event.target.parentElement.parentElement.id === 'rowFour') {
        console.log('rowFour');
        $('#formFour').submit();
    }else if (event.target.parentElement.parentElement.id === 'rowFive') {
        console.log('rowFive');
        $('#formFive').submit();
    }else if (event.target.parentElement.parentElement.id === 'rowSix') {
        console.log('rowSix');
        $('#formSix').submit();
    }
})
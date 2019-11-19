$('#check1').click(function() {
    if ($(this).prop('checked')) {
        $('#check2').prop('checked', false);
        $('#check3').prop('checked', false);
        $('#check4').prop('checked', false);
        $('#check5').prop('checked', false);

    }
});

$('#check2').click(function() {
    if ($(this).prop('checked')) {
        $('#check1').prop('checked', false);
        $('#check3').prop('checked', false);
        $('#check4').prop('checked', false);
        $('#check5').prop('checked', false);
    }
});

$('#check3').click(function() {
    if ($(this).prop('checked')) {
        $('#check2').prop('checked', false);
        $('#check1').prop('checked', false);
        $('#check4').prop('checked', false);
        $('#check5').prop('checked', false);
    }
});

$('#check4').click(function() {
    if ($(this).prop('checked')) {
        $('#check2').prop('checked', false);
        $('#check3').prop('checked', false);
        $('#check1').prop('checked', false);
        $('#check5').prop('checked', false);
    }
});

$('#check5').click(function() {
    if ($(this).prop('checked')) {
        $('#check2').prop('checked', false);
        $('#check3').prop('checked', false);
        $('#check4').prop('checked', false);
        $('#check1').prop('checked', false);
    }
});

$('#check2-1').click(function() {
    if ($(this).prop('checked')) {
        $('#check2-2').prop('checked', false);
        $('#check2-3').prop('checked', false);
        $('#check2-4').prop('checked', false);
        $('#check2-5').prop('checked', false);
    }
});

$('#check2-2').click(function() {
    if ($(this).prop('checked')) {
        $('#check2-1').prop('checked', false);
        $('#check2-3').prop('checked', false);
        $('#check2-4').prop('checked', false);
        $('#check2-5').prop('checked', false);
    }
});

$('#check2-3').click(function() {
    if ($(this).prop('checked')) {
        $('#check2-2').prop('checked', false);
        $('#check2-1').prop('checked', false);
        $('#check2-4').prop('checked', false);
        $('#check2-5').prop('checked', false);
    }
});

$('#check2-4').click(function() {
    if ($(this).prop('checked')) {
        $('#check2-2').prop('checked', false);
        $('#check2-3').prop('checked', false);
        $('#check2-1').prop('checked', false);
        $('#check2-5').prop('checked', false);
    }
});

$('#check2-5').click(function() {
    if ($(this).prop('checked')) {
        $('#check2-2').prop('checked', false);
        $('#check2-3').prop('checked', false);
        $('#check2-4').prop('checked', false);
        $('#check2-1').prop('checked', false);
    }
});

var range = $('.input-range'),
    value = $('.range-value');

var range2 = $('.input-range2'),
    value2 = $('.range-value2');

value.html(range.attr('value'));

range.on('input', function() {
    value.html(this.value);
    value2.html(10 - this.value);
});

value2.html(range2.attr('value'));

range2.on('input', function() {
    value2.html(this.value);
    value.html(10 - this.value);
});
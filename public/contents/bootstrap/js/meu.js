

new gnMenu( document.getElementById( 'gn-menu' ) );

<!-- Inicializador Select -->
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
    $('select').formSelect();
});

<!-- Inicializador DatePicker -->
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
    $('.datepicker').datepicker();
});

<!-- Inicializador TimePicker -->
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.timepicker');
    var instances = M.Timepicker.init(elems, options);
});

// Or with jQuery

$(document).ready(function(){
    $('.timepicker').timepicker();
});

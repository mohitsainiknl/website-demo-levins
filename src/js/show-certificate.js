/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
$(document).ready(function() {

    var activeCertificate = null;

    $.fn.showCertificate = function(name) { 
        $('.' + name).addClass('d-flex');
        $('.btn-close').addClass('d-block');
        activeCertificate = name;
    }

    $.fn.hideCertificate = function() { 
        if (activeCertificate !== null) {
            $('.' + activeCertificate).removeClass('d-flex');
            $('.btn-close').removeClass('d-block');
            activeCertificate = null;
        }
    }
});
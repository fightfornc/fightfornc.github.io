(function() {

    'use strict';
    
    var $preview = $('#preview'),
        submitButton = document.getElementById("submit");

    submitButton.addEventListener("click",
        function() {

            var preview = document.getElementById('preview'),
                img = preview.querySelector('img'),
                path1 = document.getElementById('path1'),
                path1Name = path1.value,
                path2 = document.getElementById('path2'),
                path2Name = path2.value,
                path3 = document.getElementById('path3'),
                path3Name = path3.value;

            watermark(['WhyIFight/FightingForNCBecause_Template.png', path1Name])
                .dataUrl(watermark.image.atPos(function(target, mark) {
                    return 0;
                }, function(target, mark) {
                    return 216;
                }, 1.0))
                .load([path2Name])
                .dataUrl(watermark.image.atPos(function(target, mark) {
                    return 0;
                }, function(target, mark) {
                    return 432;
                }, 1.0))
                .load([path3Name])
                .dataUrl(watermark.image.atPos(function(target, mark) {
                    return 0;
                }, function(target, mark) {
                    return 648;
                }, 1.0))
                .then(function(url) {
                       $preview.html('<img id="imageDemo" src="' + url + '">');
                });
        });
})();

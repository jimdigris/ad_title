'use strict';

(function () {
    let paramsString = document.location.search;
    let searchParams = new URLSearchParams(paramsString);

    if (searchParams.has('ad_title')) {
        let value = searchParams.get('ad_title');
        if (value.length > 0) { replaceHeader(value); }
    }

    function replaceHeader(value) {
        let title = document.querySelector('#ad-title');
        if (title) { title.textContent = value; }
    }
})();
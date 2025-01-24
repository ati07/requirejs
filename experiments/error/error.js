// 1. ErrBacks

requirejs.config({
    enforceDefine: true,
    paths: {
        jquery: 'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min'
    }
});

require(['jquery'], function ($) {
    console.log('jQuery loaded');
}, function (err) {
    if (err.requireModules.includes('jquery')) {
        requirejs.undef('jquery');
        requirejs.config({
            paths: { jquery: 'local/jquery' }
        });
        require(['jquery'], function () {
            console.log('jQuery loaded locally');
        });
    } else {
        console.error('Error loading module:', err);
    }
});


// 2.Paths Config Fallbacks

requirejs.config({
    enforceDefine: true,
    paths: {
        jquery: [
            'http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min',
            'lib/jquery'
        ]
    }
});

require(['jquery'], function ($) {
    console.log('jQuery loaded');
});


// 3. Global Error Handling
requirejs.onError = function (err) {
    console.log('Error Type:', err.requireType);
    if (err.requireType === 'timeout') {
        console.log('Timeout occurred for modules:', err.requireModules);
    }
    throw err; // Re-throw to avoid silent failure
};


// 4. Catching Load Failures in Internet Explorer

requirejs.config({
    enforceDefine: true,
    paths: {
        jquery: 'path/to/jquery'
    }
});

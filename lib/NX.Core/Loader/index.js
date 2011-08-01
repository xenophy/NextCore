/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Loader

(function() {

NX.Loader = {
    requiresMap: {}
};

NX.$implements(__dirname + '/', NX.Loader);
//NX.Class.registerPreprocessor('loader', require('./preprocessor/loader'), true);
//NX.Class.setDefaultPreprocessorPosition('loader', 'after', 'className');
NX.$implements(__dirname + '/NX/', NX);

})();

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

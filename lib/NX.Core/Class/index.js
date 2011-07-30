/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Class

NX.Class = require('./constructor');
NX.$implements(__dirname + '/', NX.Class);
NX.Class.registerPreprocessor('extend', require('./preprocessor/extend'), true);
NX.Class.registerPreprocessor('statics', require('./preprocessor/statics'));
NX.Class.registerPreprocessor('inheritableStatics', require('./preprocessor/inheritableStatics'));
NX.Class.registerPreprocessor('mixins', require('./preprocessor/mixins'));
NX.Class.registerPreprocessor('config', require('./preprocessor/config'));
NX.Class.setDefaultPreprocessors(['extend', 'statics', 'inheritableStatics', 'mixins', 'config']);

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

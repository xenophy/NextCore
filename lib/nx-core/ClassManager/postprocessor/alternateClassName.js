/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.postprocessor.alternateClassName

module.exports = function(name, cls, data) {

    var alternates = data.alternateClassName,
        i,
        ln,
        alternate;

    if(!(alternates instanceof Array)) {
        alternates = [alternates];
    }

    for(i = 0, ln = alternates.length; i < ln; i++) {

        alternate = alternates[i];

        if(typeof alternate !== 'string') {

            NX.Error.raise({
                sourceClass: "NX",
                sourceMethod: "define",
                msg: NX.$e("Invalid alternate of: '{0}' for class: '{1}'; must be a valid string", alternate, name)
            });

        }

        this.set.call(NX.ClassManager, alternate, cls);
    }

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

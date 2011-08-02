/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.Base.mixin

module.exports = NX.Function.flexSetter(function(name, cls) {

    if(NX.isString(cls)) {

        var cp = cls;

        cls = NX.ClassManager.get.call(NX.ClassManager, cls);

        if(cls === null) {
            NX.Loader.require(cp);
            cls = NX.ClassManager.get.call(NX.ClassManager, cp);
        }

    }

    var mixin = cls.prototype,
        my = this.prototype,
        i, fn;

    for(i in mixin) {

        if(mixin.hasOwnProperty(i)) {

            if(my[i] === undefined) {

                if(typeof mixin[i] === 'function') {

                    fn = mixin[i];

                    if(fn.$owner === undefined) {

                        this.ownMethod(i, fn);

                    } else {

                        my[i] = fn;

                    }

                } else {

                    my[i] = mixin[i];

                }

            } else if(i === 'config' && my.config && mixin.config) {

                NX.Object.merge(my.config, mixin.config);

            }
        }
    }

    if(my.mixins === undefined) {
        my.mixins = {};
    }

    my.mixins[name] = mixin;

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

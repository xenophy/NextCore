/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Next Core
 * Copyright (c)2011 Xenophy.CO.,LTD All rights Reserved.
 * http://www.xenophy.com
 */

// {{{ NX.ClassManager.create

module.exports = function(className, data, createdFn) {

    var manager = this,
        data = data || {};

    if(typeof className !== 'string') {

        NX.Error.raise({
            sourceClass: "NX",
            sourceMethod: "define",
            msg: NX.$e("Invalid class name '{0}' specified, must be a non-empty string", className)
        });

    }

    data.$className = className;

    return new NX.Class(data, function() {

        var postprocessorStack = data.postprocessors || manager.defaultPostprocessors,
            registeredPostprocessors = manager.postprocessors,
            index = 0,
            postprocessors = [],
            postprocessor, postprocessors, process, i, ln;

        delete data.postprocessors;

        for(i = 0, ln = postprocessorStack.length; i < ln; i++) {

            postprocessor = postprocessorStack[i];

            if(typeof postprocessor === 'string') {

                postprocessor = registeredPostprocessors[postprocessor];

                if(!postprocessor.always) {

                    if(data[postprocessor.name] !== undefined) {

                        postprocessors.push(postprocessor.fn);

                    }

                } else {

                    postprocessors.push(postprocessor.fn);

                }

            } else {

                postprocessors.push(postprocessor);

            }
        }

        process = function(clsName, cls, clsData) {

            postprocessor = postprocessors[index++];

            if(!postprocessor) {

                manager.set(className, cls);

                NX.Loader.historyPush(className);

                if(createdFn) {
                    createdFn.call(cls, cls);
                }

                return;
            }

            if(postprocessor.call(this, clsName, cls, clsData, process) !== false) {
                process.apply(this, arguments);
            }

        };

        process.call(manager, className, this, data);

    });

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */

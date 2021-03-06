/*

    The standard "harness" that each candidate-specific grade must implement, so that they can be called interchangeably
    in our tests.

 */
/* globals require */
(function (fluid) {
    "use strict";
    fluid = fluid || require("infusion");
    fluid.defaults("gpii.i18nComparison.translator", {
        gradeNames: ["fluid.modelComponent"],
        events: {
            onMessageBundleLoaded: null
        },
        model: {
            messageBundle: {}
        },
        invokers: {
            "translate": {
                funcName: "fluid.notImplemented",
                args:     ["{arguments}.0", "{arguments}.1", "{arguments}.2"] // messageKey, variableContent, locale
            }
        }
    });
})(fluid);

(function($) {
    "use strict";

    $.fn.ploading.addOns.progressSpinner = function(options) {
        var addOnTask = {};
        var addOnAction = {};
        var $pluginElement = options.pluginElement;
        var pluginSettings = options.pluginSettings;

        addOnTask.defineActions = function() {
            addOnAction.defineMarkup = function() {
                pluginSettings.containerHTML = '<div>';
                pluginSettings.containerClass = 'p-loading-container pl-progress-spinner';
                pluginSettings.spinnerClass = '';
                pluginSettings.spinnerHTML = '<progress max="100" value="0"></progress>';
            };

            addOnAction.addNewPluginActions = function() {

                options.pluginPublicAction.updateProgress = function() {
                    var hideAfterIsUsed = pluginSettings.hideAfter ? true : false;
                    if (pluginSettings.action === 'updateProgress') {
                        options.pluginPublicAction.show();
                    }

                    $pluginElement.find('progress').prop('value', options.pluginSettings.progress);
                    
                    if ( hideAfterIsUsed &&  pluginSettings.hideAfter === pluginSettings.progress ) {
                        options.pluginPublicAction.hide();
                    }
                };
            };

            addOnAction.updateOptions = function () {
                options.pluginSettings = pluginSettings;
            };
        };

        addOnTask.initialize = function() {
            addOnTask.defineActions();
            addOnAction.defineMarkup();
            addOnAction.addNewPluginActions();
            addOnAction.updateOptions();
        };

        addOnTask.initialize();

        return options;
    };

})(jQuery);
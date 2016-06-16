(function () {
    "use strict";

    angular
        .module("NewsFeeder")
        .factory("FlashService", FlashService);

    FlashService.$inject = ["$rootScope"];
    function FlashService($rootScope) {
        var service = {};
        var flashDuration = 1000;

        service.Success = Success;
        service.Error = Error;

        initService();

        return service;

        function initService() {
            $rootScope.$on("$locationChangeStart", function () {
                clearFlashMessage();
            });

            function clearFlashMessage() {
                var flash = $rootScope.flash;
                if (flash) {
                    if (!flash.keepAfterLocationChange) {
                        delete $rootScope.flash;
                    } else {
                        flash.keepAfterLocationChange = false;
                    }
                }
            }
        }

        function Success(message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: "success",
                timeout : flashDuration,
                keepAfterLocationChange: keepAfterLocationChange
            };
        }

        function Error(message, keepAfterLocationChange) {
            $rootScope.flash = {
                message: message,
                type: "error",
                timeout : flashDuration,
                keepAfterLocationChange: keepAfterLocationChange
            };
        }
    }

})();

angular.module('myApp', [])
    .controller("home", function home($scope, $http) {

        var vm = this;

        vm.getFollowers = getFollowers;

        function getFollowers() {
            if (!!vm.gitHubID) {
                vm.notifyUser = false;
                //call github API for getting followers (passing githubID as query parameter)
                $http({
                    method: "GET",
                    url: "https://api.github.com/users/"+vm.gitHubID+"/followers"
                }).then(function successCallback(response) {
                    vm.followers = response.data || null;
                    vm.error = null;
                }, function errorCallback(err) {
                    vm.error = err.data;
                    vm.followers = null;
                });
            } else {
                vm.notifyUser = true;
                //clear response and error
                vm.followers = null;
                vm.error = null;
            }
        }
});
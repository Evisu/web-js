angular.module( 'userModule' , [] )
.config( ['$routeProvider', function ( $routeProvider )
{
    $routeProvider.
        when( '/user' , {templateUrl : 'userList.html' , controller : UseListCtrl} , null ).
        otherwise( {redirectTo : 'www.baidu.com'} );
}] );
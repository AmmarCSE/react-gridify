"use strict";

var utils = function () {
    function generateReactKey() {
        var reactKey = 0;
        return function () {
            return reactKey++;
        };
    }

    return {
        generateReactKey: generateReactKey()
    };
}();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSSxRQUFTLFlBQVU7QUFDbkIsYUFBUyxnQkFBVCxHQUEyQjtBQUN2QixZQUFJLFdBQVcsQ0FBZjtBQUNBLGVBQU8sWUFBVTtBQUNiLG1CQUFPLFVBQVA7QUFDSCxTQUZEO0FBR0g7O0FBRUQsV0FBTztBQUNILDBCQUFtQjtBQURoQixLQUFQO0FBR0gsQ0FYVyxFQUFaIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHV0aWxzID0gKGZ1bmN0aW9uKCl7XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVSZWFjdEtleSgpe1xuICAgICAgICBsZXQgcmVhY3RLZXkgPSAwO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiByZWFjdEtleSsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2VuZXJhdGVSZWFjdEtleSA6IGdlbmVyYXRlUmVhY3RLZXkoKVxuICAgIH1cbn0pKCk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

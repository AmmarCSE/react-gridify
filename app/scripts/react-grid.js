"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var index = 0;

var Cell = function (_React$Component) {
    _inherits(Cell, _React$Component);

    function Cell() {
        _classCallCheck(this, Cell);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Cell).apply(this, arguments));
    }

    _createClass(Cell, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "td",
                null,
                React.createElement("input", {
                    value: this.props.value,
                    readOnly: true
                })
            );
        }
    }]);

    return Cell;
}(React.Component);

var Row = function (_React$Component2) {
    _inherits(Row, _React$Component2);

    function Row() {
        _classCallCheck(this, Row);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Row).apply(this, arguments));
    }

    _createClass(Row, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            var cells =
            //use headers to drive cell generation in order to maintain the order
            this.props.headers.map(function (headerKeyVal) {
                //TODO: this is a little flimsy, change the approach in how you extract the key
                var key = Object.keys(headerKeyVal)[0];
                index++;
                return React.createElement(Cell, { key: utils.generateReactKey(), value: _this3.props.rowData[key] });
            });
            return React.createElement(
                "tr",
                null,
                cells
            );
        }
    }]);

    return Row;
}(React.Component);

var Header = function (_React$Component3) {
    _inherits(Header, _React$Component3);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "th",
                null,
                this.props.header
            );
        }
    }]);

    return Header;
}(React.Component);

var HeaderRow = function (_React$Component4) {
    _inherits(HeaderRow, _React$Component4);

    function HeaderRow() {
        _classCallCheck(this, HeaderRow);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderRow).apply(this, arguments));
    }

    _createClass(HeaderRow, [{
        key: "render",
        value: function render() {
            var headerCells = this.props.headers.map(function (headerKeyVal) {
                var key = Object.keys(headerKeyVal)[0];
                return React.createElement(Header, { key: utils.generateReactKey(), header: headerKeyVal[key] });
            });
            return React.createElement(
                "tr",
                null,
                headerCells
            );
        }
    }]);

    return HeaderRow;
}(React.Component);

var Grid = function (_React$Component5) {
    _inherits(Grid, _React$Component5);

    function Grid() {
        _classCallCheck(this, Grid);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).apply(this, arguments));
    }

    _createClass(Grid, [{
        key: "render",
        value: function render() {
            var _this7 = this;

            var rows = this.props.data.map(function (dataRow) {
                return React.createElement(Row, { key: utils.generateReactKey(), rowData: dataRow, headers: _this7.props.headers });
            });
            return React.createElement(
                "table",
                null,
                React.createElement(
                    "thead",
                    null,
                    React.createElement(HeaderRow, { headers: this.props.headers })
                ),
                React.createElement(
                    "tbody",
                    null,
                    rows
                )
            );
        }
    }]);

    return Grid;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LWdyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUksUUFBUSxDQUFaOztJQUNNLEk7Ozs7Ozs7Ozs7O2lDQUNHO0FBQ1AsbUJBQ0M7QUFBQTtnQkFBQTtnQkFDYTtBQUNJLDJCQUFPLEtBQUssS0FBTCxDQUFXLEtBRHRCO0FBRUk7QUFGSjtBQURiLGFBREQ7QUFRRzs7OztFQVZjLE1BQU0sUzs7SUFhbkIsRzs7Ozs7Ozs7Ozs7aUNBQ0c7QUFBQTs7QUFDRCxnQkFBSTs7QUFFQSxpQkFBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixHQUFuQixDQUF1QixVQUFDLFlBQUQsRUFBa0I7O0FBRXJDLG9CQUFJLE1BQU0sT0FBTyxJQUFQLENBQVksWUFBWixFQUEwQixDQUExQixDQUFWO0FBQ2hCO0FBQ2dCLHVCQUFPLG9CQUFDLElBQUQsSUFBTSxLQUFLLE1BQU0sZ0JBQU4sRUFBWCxFQUFzQyxPQUFPLE9BQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsR0FBbkIsQ0FBN0MsR0FBUDtBQUNILGFBTEQsQ0FGSjtBQVFBLG1CQUNFO0FBQUE7Z0JBQUE7Z0JBQ0c7QUFESCxhQURGO0FBS0g7Ozs7RUFmYSxNQUFNLFM7O0lBa0JsQixNOzs7Ozs7Ozs7OztpQ0FDRztBQUNQLG1CQUNDO0FBQUE7Z0JBQUE7Z0JBQ2MsS0FBSyxLQUFMLENBQVc7QUFEekIsYUFERDtBQUtHOzs7O0VBUGdCLE1BQU0sUzs7SUFVckIsUzs7Ozs7Ozs7Ozs7aUNBQ0c7QUFDRCxnQkFBSSxjQUNBLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsR0FBbkIsQ0FBdUIsVUFBQyxZQUFELEVBQWtCO0FBQ3JDLG9CQUFJLE1BQU0sT0FBTyxJQUFQLENBQVksWUFBWixFQUEwQixDQUExQixDQUFWO0FBQ0EsdUJBQU8sb0JBQUMsTUFBRCxJQUFRLEtBQUssTUFBTSxnQkFBTixFQUFiLEVBQXVDLFFBQVEsYUFBYSxHQUFiLENBQS9DLEdBQVA7QUFDSCxhQUhELENBREo7QUFLQSxtQkFDRTtBQUFBO2dCQUFBO2dCQUNHO0FBREgsYUFERjtBQUtIOzs7O0VBWm1CLE1BQU0sUzs7SUFleEIsSTs7Ozs7Ozs7Ozs7aUNBQ0c7QUFBQTs7QUFDRCxnQkFBSSxPQUNBLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBb0IsVUFBQyxPQUFELEVBQWE7QUFDN0IsdUJBQU8sb0JBQUMsR0FBRCxJQUFLLEtBQUssTUFBTSxnQkFBTixFQUFWLEVBQW9DLFNBQVMsT0FBN0MsRUFBc0QsU0FBUyxPQUFLLEtBQUwsQ0FBVyxPQUExRSxHQUFQO0FBQ0gsYUFGRCxDQURKO0FBSUEsbUJBQ0U7QUFBQTtnQkFBQTtnQkFDRTtBQUFBO29CQUFBO29CQUNJLG9CQUFDLFNBQUQsSUFBVyxTQUFTLEtBQUssS0FBTCxDQUFXLE9BQS9CO0FBREosaUJBREY7Z0JBSUU7QUFBQTtvQkFBQTtvQkFBUTtBQUFSO0FBSkYsYUFERjtBQVFIOzs7O0VBZGMsTUFBTSxTIiwiZmlsZSI6InJlYWN0LWdyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaW5kZXggPSAwO1xuY2xhc3MgQ2VsbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDx0ZD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XG4gICAgICAgICAgICAgICAgLz5cblx0XHRcdDwvdGQ+XG5cdFx0KTtcbiAgICB9XG59XG5cbmNsYXNzIFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuICAgICAgICBsZXQgY2VsbHMgPSBcbiAgICAgICAgICAgIC8vdXNlIGhlYWRlcnMgdG8gZHJpdmUgY2VsbCBnZW5lcmF0aW9uIGluIG9yZGVyIHRvIG1haW50YWluIHRoZSBvcmRlclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5oZWFkZXJzLm1hcCgoaGVhZGVyS2V5VmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgLy9UT0RPOiB0aGlzIGlzIGEgbGl0dGxlIGZsaW1zeSwgY2hhbmdlIHRoZSBhcHByb2FjaCBpbiBob3cgeW91IGV4dHJhY3QgdGhlIGtleVxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyhoZWFkZXJLZXlWYWwpWzBdO1xuaW5kZXgrKztcbiAgICAgICAgICAgICAgICByZXR1cm4gPENlbGwga2V5PXt1dGlscy5nZW5lcmF0ZVJlYWN0S2V5KCl9ICB2YWx1ZT17dGhpcy5wcm9wcy5yb3dEYXRhW2tleV19Lz47XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7Y2VsbHN9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybihcblx0XHRcdDx0aD5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5oZWFkZXJ9XG5cdFx0XHQ8L3RoPlxuXHRcdCk7XG4gICAgfVxufVxuXG5jbGFzcyBIZWFkZXJSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcbiAgICAgICAgbGV0IGhlYWRlckNlbGxzID0gXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhlYWRlcnMubWFwKChoZWFkZXJLZXlWYWwpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gT2JqZWN0LmtleXMoaGVhZGVyS2V5VmFsKVswXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gPEhlYWRlciBrZXk9e3V0aWxzLmdlbmVyYXRlUmVhY3RLZXkoKX0gaGVhZGVyPXtoZWFkZXJLZXlWYWxba2V5XX0vPjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtoZWFkZXJDZWxsc31cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuICAgICAgICBsZXQgcm93cyA9XG4gICAgICAgICAgICB0aGlzLnByb3BzLmRhdGEubWFwKChkYXRhUm93KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxSb3cga2V5PXt1dGlscy5nZW5lcmF0ZVJlYWN0S2V5KCl9IHJvd0RhdGE9e2RhdGFSb3d9IGhlYWRlcnM9e3RoaXMucHJvcHMuaGVhZGVyc30vPjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyUm93IGhlYWRlcnM9e3RoaXMucHJvcHMuaGVhZGVyc30vPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT57cm93c308L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

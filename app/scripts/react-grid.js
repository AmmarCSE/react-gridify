"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
                    value: this.props.value
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
                return React.createElement(Cell, { value: _this3.props.rowData[key] });
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
                return React.createElement(Header, { key: key, header: headerKeyVal[key] });
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
                return React.createElement(Row, { key: dataRow.id, rowData: dataRow, headers: _this7.props.headers });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWN0LWdyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEk7Ozs7Ozs7Ozs7O2lDQUNHO0FBQ1AsbUJBQ0M7QUFBQTtnQkFBQTtnQkFDYTtBQUNFLDJCQUFPLEtBQUssS0FBTCxDQUFXO0FBRHBCO0FBRGIsYUFERDtBQU9HOzs7O0VBVGMsTUFBTSxTOztJQVluQixHOzs7Ozs7Ozs7OztpQ0FDRztBQUFBOztBQUNELGdCQUFJOztBQUVBLGlCQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLEdBQW5CLENBQXVCLFVBQUMsWUFBRCxFQUFrQjs7QUFFckMsb0JBQUksTUFBTSxPQUFPLElBQVAsQ0FBWSxZQUFaLEVBQTBCLENBQTFCLENBQVY7QUFDQSx1QkFBTyxvQkFBQyxJQUFELElBQU0sT0FBTyxPQUFLLEtBQUwsQ0FBVyxPQUFYLENBQW1CLEdBQW5CLENBQWIsR0FBUDtBQUNILGFBSkQsQ0FGSjtBQU9BLG1CQUNFO0FBQUE7Z0JBQUE7Z0JBQ0c7QUFESCxhQURGO0FBS0g7Ozs7RUFkYSxNQUFNLFM7O0lBaUJsQixNOzs7Ozs7Ozs7OztpQ0FDRztBQUNQLG1CQUNDO0FBQUE7Z0JBQUE7Z0JBQ2MsS0FBSyxLQUFMLENBQVc7QUFEekIsYUFERDtBQUtHOzs7O0VBUGdCLE1BQU0sUzs7SUFVckIsUzs7Ozs7Ozs7Ozs7aUNBQ0c7QUFDRCxnQkFBSSxjQUNBLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsR0FBbkIsQ0FBdUIsVUFBQyxZQUFELEVBQWtCO0FBQ3JDLG9CQUFJLE1BQU0sT0FBTyxJQUFQLENBQVksWUFBWixFQUEwQixDQUExQixDQUFWO0FBQ0EsdUJBQU8sb0JBQUMsTUFBRCxJQUFRLEtBQUssR0FBYixFQUFrQixRQUFRLGFBQWEsR0FBYixDQUExQixHQUFQO0FBQ0gsYUFIRCxDQURKO0FBS0EsbUJBQ0U7QUFBQTtnQkFBQTtnQkFDRztBQURILGFBREY7QUFLSDs7OztFQVptQixNQUFNLFM7O0lBZXhCLEk7Ozs7Ozs7Ozs7O2lDQUNHO0FBQUE7O0FBQ0QsZ0JBQUksT0FDQSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEdBQWhCLENBQW9CLFVBQUMsT0FBRCxFQUFhO0FBQzdCLHVCQUFPLG9CQUFDLEdBQUQsSUFBSyxLQUFLLFFBQVEsRUFBbEIsRUFBc0IsU0FBUyxPQUEvQixFQUF3QyxTQUFTLE9BQUssS0FBTCxDQUFXLE9BQTVELEdBQVA7QUFDSCxhQUZELENBREo7QUFJQSxtQkFDRTtBQUFBO2dCQUFBO2dCQUNFO0FBQUE7b0JBQUE7b0JBQ0ksb0JBQUMsU0FBRCxJQUFXLFNBQVMsS0FBSyxLQUFMLENBQVcsT0FBL0I7QUFESixpQkFERjtnQkFJRTtBQUFBO29CQUFBO29CQUFRO0FBQVI7QUFKRixhQURGO0FBUUg7Ozs7RUFkYyxNQUFNLFMiLCJmaWxlIjoicmVhY3QtZ3JpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENlbGwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4oXG5cdFx0XHQ8dGQ+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy52YWx1ZX1cbiAgICAgICAgICAgICAgICAvPlxuXHRcdFx0PC90ZD5cblx0XHQpO1xuICAgIH1cbn1cblxuY2xhc3MgUm93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG4gICAgICAgIGxldCBjZWxscyA9IFxuICAgICAgICAgICAgLy91c2UgaGVhZGVycyB0byBkcml2ZSBjZWxsIGdlbmVyYXRpb24gaW4gb3JkZXIgdG8gbWFpbnRhaW4gdGhlIG9yZGVyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhlYWRlcnMubWFwKChoZWFkZXJLZXlWYWwpID0+IHtcbiAgICAgICAgICAgICAgICAvL1RPRE86IHRoaXMgaXMgYSBsaXR0bGUgZmxpbXN5LCBjaGFuZ2UgdGhlIGFwcHJvYWNoIGluIGhvdyB5b3UgZXh0cmFjdCB0aGUga2V5XG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IE9iamVjdC5rZXlzKGhlYWRlcktleVZhbClbMF07XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDZWxsIHZhbHVlPXt0aGlzLnByb3BzLnJvd0RhdGFba2V5XX0vPjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtjZWxsc31cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PHRoPlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmhlYWRlcn1cblx0XHRcdDwvdGg+XG5cdFx0KTtcbiAgICB9XG59XG5cbmNsYXNzIEhlYWRlclJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdHJlbmRlcigpe1xuICAgICAgICBsZXQgaGVhZGVyQ2VsbHMgPSBcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGVhZGVycy5tYXAoKGhlYWRlcktleVZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBPYmplY3Qua2V5cyhoZWFkZXJLZXlWYWwpWzBdO1xuICAgICAgICAgICAgICAgIHJldHVybiA8SGVhZGVyIGtleT17a2V5fSBoZWFkZXI9e2hlYWRlcktleVZhbFtrZXldfS8+O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge2hlYWRlckNlbGxzfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBHcmlkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG4gICAgICAgIGxldCByb3dzID1cbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGF0YS5tYXAoKGRhdGFSb3cpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPFJvdyBrZXk9e2RhdGFSb3cuaWR9IHJvd0RhdGE9e2RhdGFSb3d9IGhlYWRlcnM9e3RoaXMucHJvcHMuaGVhZGVyc30vPjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDx0YWJsZT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8SGVhZGVyUm93IGhlYWRlcnM9e3RoaXMucHJvcHMuaGVhZGVyc30vPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT57cm93c308L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

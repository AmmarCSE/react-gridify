"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
*	Searchable Table
*	Author: Jean-Pierre Sierens
*	===========================================================================

import React from 'react';

*/

var SearchableTable = function (_React$Component) {
	_inherits(SearchableTable, _React$Component);

	function SearchableTable() {
		_classCallCheck(this, SearchableTable);

		// Initial state of the component

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchableTable).call(this));

		_this.state = { filterText: '' };
		return _this;
	}

	_createClass(SearchableTable, [{
		key: "handleUserInput",
		value: function handleUserInput(filterText) {
			// When there's a change in the state, the component and all its
			// sub-components get updated.
			this.setState({ filterText: filterText });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(SearchBar, {
					filterText: this.state.filterText,
					onUserInput: this.handleUserInput.bind(this)
				}),
				React.createElement(Table, {
					data: this.props.data,
					filterText: this.state.filterText
				})
			);
		}
	}]);

	return SearchableTable;
}(React.Component);

var SearchBar = function (_React$Component2) {
	_inherits(SearchBar, _React$Component2);

	function SearchBar() {
		_classCallCheck(this, SearchBar);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).apply(this, arguments));
	}

	_createClass(SearchBar, [{
		key: "handleChange",
		value: function handleChange() {
			// passing filter data up by using a callback
			this.props.onUserInput(
			// ref is like the id
			this.refs.filterTextInput.value);
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"form",
				null,
				React.createElement("input", {
					type: "text",
					placeholder: "Search for one keyword...",
					ref: "filterTextInput",
					value: this.props.filterText,
					onChange: this.handleChange.bind(this)
				})
			);
		}
	}]);

	return SearchBar;
}(React.Component);

var Table = function (_React$Component3) {
	_inherits(Table, _React$Component3);

	function Table() {
		_classCallCheck(this, Table);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).apply(this, arguments));
	}

	_createClass(Table, [{
		key: "render",
		value: function render() {
			var sections = [];
			var data = this.props.data;
			data.forEach(function (product) {
				if (product.name.indexOf(this.props.filterText) === -1) {
					return;
				}
				sections.push(React.createElement(Section, { key: product.name, data: product }));
			}.bind(this));
			return React.createElement(
				"div",
				null,
				sections
			);
		}
	}]);

	return Table;
}(React.Component);

var Section = function (_React$Component4) {
	_inherits(Section, _React$Component4);

	function Section() {
		_classCallCheck(this, Section);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Section).apply(this, arguments));
	}

	_createClass(Section, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(
					"p",
					null,
					this.props.data.name,
					" = ",
					this.props.data.price,
					" "
				)
			);
		}
	}]);

	return Section;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlYXJjaGFibGVUYWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBUU0sZTs7O0FBQ0wsNEJBQWM7QUFBQTs7OztBQUFBOztBQUdQLFFBQUssS0FBTCxHQUFhLEVBQUMsWUFBWSxFQUFiLEVBQWI7QUFITztBQUlWOzs7O2tDQUNlLFUsRUFBWTs7O0FBR3hCLFFBQUssUUFBTCxDQUFjLEVBQUMsWUFBWSxVQUFiLEVBQWQ7QUFDSDs7OzJCQUNJO0FBQ1AsVUFDQztBQUFBO0lBQUE7SUFDQyxvQkFBQyxTQUFEO0FBQ0MsaUJBQVksS0FBSyxLQUFMLENBQVcsVUFEeEI7QUFFZ0Isa0JBQWEsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCO0FBRjdCLE1BREQ7SUFLQyxvQkFBQyxLQUFEO0FBQ0MsV0FBTSxLQUFLLEtBQUwsQ0FBVyxJQURsQjtBQUVDLGlCQUFZLEtBQUssS0FBTCxDQUFXO0FBRnhCO0FBTEQsSUFERDtBQVlBOzs7O0VBeEI0QixNQUFNLFM7O0lBMkI5QixTOzs7Ozs7Ozs7OztpQ0FDVTs7QUFFUixRQUFLLEtBQUwsQ0FBVyxXQUFYOztBQUVJLFFBQUssSUFBTCxDQUFVLGVBQVYsQ0FBMEIsS0FGOUI7QUFJSDs7OzJCQUNJO0FBQ1AsVUFDVTtBQUFBO0lBQUE7SUFDSTtBQUNDLFdBQUssTUFETjtBQUVDLGtCQUFZLDJCQUZiO0FBR0MsVUFBSSxpQkFITDtBQUlDLFlBQVEsS0FBSyxLQUFMLENBQVcsVUFKcEI7QUFLQyxlQUFXLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QjtBQUxaO0FBREosSUFEVjtBQVdBOzs7O0VBcEJzQixNQUFNLFM7O0lBdUJ4QixLOzs7Ozs7Ozs7OzsyQkFDRztBQUNQLE9BQUksV0FBVyxFQUFmO0FBQ0EsT0FBSSxPQUFPLEtBQUssS0FBTCxDQUFXLElBQXRCO0FBQ0EsUUFBSyxPQUFMLENBQWEsVUFBUyxPQUFULEVBQWlCO0FBQzdCLFFBQUksUUFBUSxJQUFSLENBQWEsT0FBYixDQUFxQixLQUFLLEtBQUwsQ0FBVyxVQUFoQyxNQUFnRCxDQUFDLENBQXJELEVBQXdEO0FBQ3ZEO0FBQ0E7QUFDRCxhQUFTLElBQVQsQ0FBYyxvQkFBQyxPQUFELElBQVMsS0FBSyxRQUFRLElBQXRCLEVBQTRCLE1BQU0sT0FBbEMsR0FBZDtBQUNBLElBTFksQ0FLWCxJQUxXLENBS04sSUFMTSxDQUFiO0FBTUEsVUFDQztBQUFBO0lBQUE7SUFBTTtBQUFOLElBREQ7QUFHQTs7OztFQWJrQixNQUFNLFM7O0lBZ0JwQixPOzs7Ozs7Ozs7OzsyQkFDRztBQUNQLFVBQ0M7QUFBQTtJQUFBO0lBQ0M7QUFBQTtLQUFBO0tBQUksS0FBSyxLQUFMLENBQVcsSUFBWCxDQUFnQixJQUFwQjtLQUFBO0tBQTZCLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsS0FBN0M7S0FBQTtBQUFBO0FBREQsSUFERDtBQUtBOzs7O0VBUG9CLE1BQU0sUyIsImZpbGUiOiJTZWFyY2hhYmxlVGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuKlx0U2VhcmNoYWJsZSBUYWJsZVxuKlx0QXV0aG9yOiBKZWFuLVBpZXJyZSBTaWVyZW5zXG4qXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuKi9cbmNsYXNzIFNlYXJjaGFibGVUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0Ly8gSW5pdGlhbCBzdGF0ZSBvZiB0aGUgY29tcG9uZW50XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7ZmlsdGVyVGV4dDogJyd9XG4gICAgfVxuICAgIGhhbmRsZVVzZXJJbnB1dChmaWx0ZXJUZXh0KSB7XG4gICAgXHQvLyBXaGVuIHRoZXJlJ3MgYSBjaGFuZ2UgaW4gdGhlIHN0YXRlLCB0aGUgY29tcG9uZW50IGFuZCBhbGwgaXRzIFxuICAgIFx0Ly8gc3ViLWNvbXBvbmVudHMgZ2V0IHVwZGF0ZWQuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2ZpbHRlclRleHQ6IGZpbHRlclRleHR9KTtcbiAgICB9XG5cdHJlbmRlcigpe1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8U2VhcmNoQmFyIFxuXHRcdFx0XHRcdGZpbHRlclRleHQ9e3RoaXMuc3RhdGUuZmlsdGVyVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgb25Vc2VySW5wdXQ9e3RoaXMuaGFuZGxlVXNlcklucHV0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz5cblx0XHRcdFx0PFRhYmxlIFxuXHRcdFx0XHRcdGRhdGE9e3RoaXMucHJvcHMuZGF0YX0gXG5cdFx0XHRcdFx0ZmlsdGVyVGV4dD17dGhpcy5zdGF0ZS5maWx0ZXJUZXh0fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5jbGFzcyBTZWFyY2hCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRoYW5kbGVDaGFuZ2UoKSB7XG5cdFx0Ly8gcGFzc2luZyBmaWx0ZXIgZGF0YSB1cCBieSB1c2luZyBhIGNhbGxiYWNrXG4gICAgICAgIHRoaXMucHJvcHMub25Vc2VySW5wdXQoXG4gICAgICAgIFx0Ly8gcmVmIGlzIGxpa2UgdGhlIGlkXG4gICAgICAgICAgICB0aGlzLnJlZnMuZmlsdGVyVGV4dElucHV0LnZhbHVlXG4gICAgICAgICk7XG4gICAgfVxuXHRyZW5kZXIoKXtcblx0XHRyZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgIFx0dHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICBcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBvbmUga2V5d29yZC4uLlwiIFxuICAgICAgICAgICAgICAgIFx0cmVmPVwiZmlsdGVyVGV4dElucHV0XCJcbiAgICAgICAgICAgICAgICBcdHZhbHVlPSB7dGhpcy5wcm9wcy5maWx0ZXJUZXh0fVxuICAgICAgICAgICAgICAgIFx0b25DaGFuZ2U9IHt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSBcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuXHR9XG59XG5cbmNsYXNzIFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0bGV0IHNlY3Rpb25zID0gW107XG5cdFx0bGV0IGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XG5cdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHByb2R1Y3Qpe1xuXHRcdFx0aWYgKHByb2R1Y3QubmFtZS5pbmRleE9mKHRoaXMucHJvcHMuZmlsdGVyVGV4dCkgPT09IC0xKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHNlY3Rpb25zLnB1c2goPFNlY3Rpb24ga2V5PXtwcm9kdWN0Lm5hbWV9IGRhdGE9e3Byb2R1Y3R9IC8+KTtcblx0XHR9LmJpbmQodGhpcykpXG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj57c2VjdGlvbnN9PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG5jbGFzcyBTZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0cmVuZGVyKCl7XG5cdFx0cmV0dXJuKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PHA+e3RoaXMucHJvcHMuZGF0YS5uYW1lfSA9IHt0aGlzLnByb3BzLmRhdGEucHJpY2V9IDwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Week;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = {
	'root': 'Cal__Week__root',
	'weekItem': 'Cal__Week__weekItem',
	'weekSelected': 'Cal__Week__weekSelected',
	'weekNumber': 'Cal__Week__weekNumber',
	'weekDistance': 'Cal__Week__weekDistance'
};

function Week(_ref) {
	var date = _ref.date;
	var handleWeekClick = _ref.handleWeekClick;
	var isWeekSelected = _ref.isWeekSelected;
	var theme = _ref.theme;
	var rowHeight = _ref.rowHeight;
	var isDisabled = _ref.isDisabled;

	var weekNumber = date.date.format('ww');
	var weekDistance = (0, _moment2.default)().startOf('week').diff(date.date, "weeks");
	var weekDistanceLabel = weekDistance === 0 ? "0 v" : weekDistance < 0 ? "+" + Math.abs(weekDistance) + " v" : "-" + weekDistance + " v";
	var weekItemHeight = rowHeight / 2;

	return _react2.default.createElement(
		'li',
		{ className: (0, _classnames2.default)(style.root, isWeekSelected ? style.weekSelected : null),
			onClick: !isDisabled && handleWeekClick ? handleWeekClick.bind(this, date.date) : null,
			style: isWeekSelected ? { 'backgroundColor': theme.selectedWeekBackground } : { 'backgroundColor': theme.weekBackground } },
		_react2.default.createElement(
			'span',
			{ className: (0, _classnames2.default)(style.weekItem, style.weekNumber), style: { height: weekItemHeight } },
			'v.',
			weekNumber
		),
		_react2.default.createElement(
			'span',
			{ className: (0, _classnames2.default)(style.weekItem, style.weekDistance), style: { height: weekItemHeight } },
			weekDistanceLabel
		)
	);
}
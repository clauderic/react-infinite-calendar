import {expect} from 'chai';
import moment from 'moment';
import {getDaysInMonth, validDate, validParsedDate} from '../src/utils';

describe("Moment.js Date Validator", function() {
	it("should return an error when an invalid date is provided", () => {
		expect(validDate({date: '20160231'}, 'date')).to.be.an.instanceof(Error);
	})
});

describe("Custom Parsed Date Validator", function() {
	it("should return an error when parsed date format is invalid", () => {
		expect(validParsedDate({parsedDate: {date: '20160101', yyyymmdd: 'derp'}}, 'parsedDate')).to.be.an.instanceof(Error);
        expect(validParsedDate({parsedDate: {date: '20160101', yyyymmd: '20160101'}}, 'parsedDate')).to.be.an.instanceof(Error);
        expect(validParsedDate({parsedDate: {date: '20160101'}}, 'parsedDate')).to.be.an.instanceof(Error);
        expect(validParsedDate({parsedDate: {yyyymmd: '20160101'}}, 'parsedDate')).to.be.an.instanceof(Error);
	})
    it("should return an error when date is invalid", () => {
        expect(validParsedDate({parsedDate: {date: '20160231', yyyymmdd: '20160101'}}, 'parsedDate')).to.be.an.instanceof(Error);
	})
});

describe("getDaysInMonth", function() {
    it("should return all days of a any given month", function() {
        expect(getDaysInMonth(moment())).to.have.length(moment().daysInMonth());
    })
});

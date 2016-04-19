'use strict';
let nlp = require('../../../src/index.js');
let should = require('should');
let arr = [
  'yesterday',
  'today',
  'tomorrow',
  'morning',
  'afternoon',
  'evening',
  'noon',
  'midnight',
  'yesterday at noon',
  'yesterday at midnight',
  'today at noon',
  'today at midnight',
  'tomorrow at noon',
  'tomorrow at midnight',
  'this morning',
  'this afternoon',
  'this evening',
  'yesterday morning',
  'yesterday afternoon',
  'yesterday evening',
  'today morning',
  'today afternoon',
  'today evening',
  'tomorrow morning',
  'tomorrow afternoon',
  'tomorrow evening',
  'thursday morning',
  'thursday afternoon',
  'thursday evening',
  '6:00 yesterday',
  '6:00 today',
  '6:00 tomorrow',
  '5am yesterday',
  '5am today',
  '5am tomorrow',
  '4pm yesterday',
  '4pm today',
  '4pm tomorrow',
  'tuesday last week',
  'tuesday this week',
  'tuesday next week',
  'last week wednesday',
  'this week wednesday',
  'next week wednesday',
  '10 seconds ago',
  '10 minutes ago',
  '10 hours ago',
  '10 days ago',
  '10 weeks ago',
  '10 months ago',
  '10 years ago',
  'saturday',
  'sunday 11:00',
  'yesterday at 4:00',
  'today at 4:00',
  'tomorrow at 4:00',
  'yesterday at 6:45am',
  'today at 6:45am',
  'tomorrow at 6:45am',
  'yesterday at 6:45pm',
  'today at 6:45pm',
  'tomorrow at 6:45pm',
  'yesterday at 2:32 AM',
  'today at 2:32 AM',
  'tomorrow at 2:32 AM',
  'yesterday at 2:32 PM',
  'today at 2:32 PM',
  'tomorrow at 2:32 PM',
  'yesterday 02:32',
  'today 02:32',
  'tomorrow 02:32',
  'yesterday 2:32am',
  'today 2:32am',
  'tomorrow 2:32am',
  'yesterday 2:32pm',
  'today 2:32pm',
  'tomorrow 2:32pm',
  'wednesday at 14:30',
  'wednesday at 02:30am',
  'wednesday at 02:30pm',
  'wednesday 14:30',
  'wednesday 02:30am',
  'wednesday 02:30pm',
  'friday 03:00 am',
  'friday 03:00 pm',
  'sunday at 05:00 am',
  'sunday at 05:00 pm',
  '4th february',
  'november 3rd',
  'last june',
  'next october',
  '6 am',
  '5am',
  '5:30am',
  '8 pm',
  '4pm',
  '4:20pm',
  '06:56:06 am',
  '06:56:06 pm',
  'mon 2:35',
  '1:00 sun',
  '1am sun',
  '1pm sun',
  '1:00 on sun',
  '1am on sun',
  '1pm on sun',
  '12:14 PM',
  '12:14 AM',
  '2 seconds before now',
  '2 minutes before now',
  '2 hours before now',
  '2 days before now',
  '2 weeks before now',
  '2 months before now',
  '2 years before now',
  '4 seconds from now',
  '4 minutes from now',
  '4 hours from now',
  '4 days from now',
  '4 weeks from now',
  '4 months from now',
  '4 years from now',
  // '6 in the morning',
  // '4 in the afternoon',
  // '9 in the evening',
  // 'monday 6 in the morning',
  // 'monday 4 in the afternoon',
  // 'monday 9 in the evening',
  'last sunday at 21:45',
  'monday last week',
  '12th day last month',
  '12th day this month',
  '12th day next month',
  '1st tuesday last november',
  '1st tuesday this november',
  '1st tuesday next november',
  '10 hours before noon',
  '10 hours before midnight',
  '5 hours after noon',
  '5 hours after midnight',
  'noon last friday',
  'midnight last friday',
  'noon this friday',
  'midnight this friday',
  'noon next friday',
  'midnight next friday',
  'last friday at 20:00',
  'this friday at 20:00',
  'next friday at 20:00',
  '1:00 last friday',
  '1:00 this friday',
  '1:00 next friday',
  '1am last friday',
  '1am this friday',
  '1am next friday',
  '1pm last friday',
  '1pm this friday',
  '1pm next friday',
  '5 am last monday',
  '5 am this monday',
  '5 am next monday',
  '5 pm last monday',
  '5 pm this monday',
  '5 pm next monday',
  'last wednesday 7am',
  'this wednesday 7am',
  'next wednesday 7am',
  'last wednesday 7pm',
  'this wednesday 7pm',
  'next wednesday 7pm',
  'last tuesday 11 am',
  'this tuesday 11 am',
  'next tuesday 11 am',
  'last tuesday 11 pm',
  'this tuesday 11 pm',
  'next tuesday 11 pm',
  'yesterday at 13:00',
  'today at 13:00',
  '2nd friday in august',
  '3rd wednesday in november',
  'tomorrow 1 year ago',
  '11 january 2 years ago',
  '6 mondays from now',
  // 'final thursday in april',
  'last thursday in april',
  'monday to friday',
  '1 April to 31 August',
  '1999-12-31 to tomorrow',
  // 'now to 2010-01-01',
  '2009-03-10 9:00 to 11:00',
  '26 oct 10:00 am to 11:00 am',
  // 'jan 1 to 2',
  '16:00 nov 6 to 17:00',
  'may 2nd to 5th',
  '6am dec 5 to 7am',
  // '1/3 to 2/3',
  '2/3 to in 1 week',
  '3/3 21:00 to in 5 days',
  // 'first day of 2009 to last day of 2009',
  // 'first day of may to last day of may',
  'first to last day of 2008',
  'first to last day of september',
  // 'for 4 seconds',
  // 'for 4 minutes',
  // 'for 4 hours',
  // 'for 4 days',
  // 'for 4 weeks',
  // 'for 4 months',
  // 'for 4 years',
  'january 11',
  '11 january',
  '18 oct 17:00',
  '18 oct 5am',
  '18 oct 5pm',
  '18 oct 5 am',
  '18 oct 5 pm',
  'dec 25',
  'feb 28 3:00',
  'feb 28 3am',
  'feb 28 3pm',
  'feb 28 3 am',
  'feb 28 3 pm',
  '19:00 jul 1',
  '7am jul 1',
  '7pm jul 1',
  '7 am jul 1',
  '7 pm jul 1',
  'jan 24, 2011 12:00',
  'jan 24, 2011 12am',
  'jan 24, 2011 12pm',
  'may 27th',
  // '2005',
  'march 1st 2009',
  'february 14, 2004',
  'jan 3 2010',
  '3 jan 2000',
  '2010 october 28',
  // '1/3',
  '1/3 16:00',
  '4:00',
  '17:00',
  '3:20:00',
  '1st day last year',
  '1st day this year',
  '1st day next year',
  '6th day last week',
  '6th day this week',
  '6th day next week',
  'yesterday 7 seconds ago',
  'yesterday 7 minutes ago',
  'yesterday 7 hours ago',
  'yesterday 7 days ago',
  'yesterday 7 weeks ago',
  'yesterday 7 months ago',
  'yesterday 7 years ago',
  'tomorrow 3 seconds ago',
  'tomorrow 3 minutes ago',
  'tomorrow 3 hours ago',
  'tomorrow 3 days ago',
  'tomorrow 3 weeks ago',
  'tomorrow 3 months ago',
  'tomorrow 3 years ago',
  '2nd monday',
  '100th day',
  '11 january next year',
  '11 january this year',
  '11 january last year',
  '6 hours before yesterday',
  '6 hours before tomorrow',
  '3 hours after yesterday',
  '3 hours after tomorrow',
  'saturday 3 months ago at 17:00',
  'saturday 3 months ago at 5:00am',
  'saturday 3 months ago at 5:00pm',
  '4th day last week',
  '8th month last year',
  '8th month this year',
  '8th month next year',
  'fri 3 months ago at 5am',
  'wednesday 1 month ago at 8pm',
  'October 2006',
  '27/5/1979',
// '-5min',
// '+2d',
// '100th day to 200th',
// 'march'
];
describe('date', function () {

  arr.forEach((s) => {
    let terms = nlp.sentence(s).terms;
    it(s, function (done) {
      (terms.length).should.equal(1);
      (terms[0].pos['Date']).should.equal(true);
      done();
    });
  });
});

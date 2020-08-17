import {getVideoDisplayDate} from "../../Utils/TimeUtil";

describe('TimeUtil', function () {

    describe('getVideoDisplayDate', function () {

        it('should give empty result for undefined time', function () {
            const actual = getVideoDisplayDate(null);

            expect(actual).toEqual('');
        });

        it('should give empty result for invalid time', function () {
            const actual = getVideoDisplayDate('hello');

            expect(actual).toEqual('');
        });

        it('should give pre-formatted result for valid time', function () {
            const actual = getVideoDisplayDate('2020-08-15T13:24:29Z');

            expect(actual).toEqual('15 Aug 2020');
        });

        const monthMap = {
            '01': 'Jan',
            '02': 'Feb',
            '03': 'Mar',
            '04': 'Apr',
            '05': 'May',
            '06': 'June',
            '07': 'July',
            '08': 'Aug',
            '09': 'Sept',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec',
        };

        for (const [key, value] of Object.entries(monthMap)) {
            it(`should give pre-formatted short month names in result for month number ${key}`, function () {
                const actual = getVideoDisplayDate(`2020-${key}-15T13:24:29Z`);

                expect(actual).toEqual(`15 ${value} 2020`);
            });
        }
    });
});

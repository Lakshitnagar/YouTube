import {addApiFailureStatus, removeApiFailureStatus} from "../../../store/actions/PresentationAction";
import {presentationReducer} from "../../../store/reducers/PresentationReducer";

jest.mock('../../../store/Store');

describe('Presentation Reducer', () => {

    describe('apiFailureStatusReducer', function () {

        it('should save and return api failure status', () => {
            const action = addApiFailureStatus('api1');
            const action2 = addApiFailureStatus('api2');
            const expected = {
                apiStatus: ['api1', 'api2'],
            };
            let state = {};
            state = presentationReducer(state, action);

            expect(presentationReducer(state, action2)).toEqual(expected);
        });

        it('should not duplicate api failure status', () => {
            const action = addApiFailureStatus('api1');
            const duplicateAction = addApiFailureStatus('api1');

            const expected = {
                apiStatus: ['api1']
            };
            let state = {};
            state = presentationReducer(state, action);

            expect(presentationReducer(state, duplicateAction)).toEqual(expected);
        });

        it('should remove api failure status', () => {
            let state = {
                apiStatus: ['api1', 'api2'],
            };
            const action = removeApiFailureStatus('api1');

            const expected = {
                apiStatus: ['api2'],
            };

            expect(presentationReducer(state, action)).toEqual(expected);
        });
    });
});

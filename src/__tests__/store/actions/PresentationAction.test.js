import {addApiFailureStatus, removeApiFailureStatus} from "../../../store/actions/PresentationAction";

describe('PresentationConfigAction', () =>{

    it('should save api failure status', () => {
        const payload = 'API1';
        const type = 'ADD_API_FAILURE_STATUS';
        const action = addApiFailureStatus(payload);

        expect(action).toEqual({type, payload});
    });

    it('should remove api failure status', () => {
        const payload = 'API1';
        const type = 'REMOVE_API_FAILURE_STATUS';
        const action = removeApiFailureStatus(payload);
        expect(action).toEqual({type, payload});
    });
});

import React from 'react';
import {shallow} from "enzyme";
import {shallowToJson} from "enzyme-to-json";
import Chip from "../../../../components/common/Chip/Chip";

describe('Chip', function () {
    it('should render and match snapshot', function () {
        const component = <Chip/>;

        const wrapper = shallow(component);

        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });

    it('should show text passed to it inside chip', function () {
        const component = <Chip text={'chip text'}/>;
        const wrapper = shallow(component);

        expect(wrapper.find('.chip').text()).toEqual('chip text');
    });

    it('should call onClick on clicking the chip with text that passed to it', function () {
        const mockOnChipClick = jest.fn();
        const component = <Chip text={'chip text'} onClick={mockOnChipClick}/>;
        const wrapper = shallow(component);

        wrapper.find('.chip').simulate('click');
        expect(mockOnChipClick).toHaveBeenCalledWith('chip text');
    });
});

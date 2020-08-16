import React from 'react';
import {Provider} from "react-redux";
import App from '../App';

jest.mock('../App', () => ()=><div>App</div>);
jest.mock('../store/Store', () => {return {}});
jest.mock('react-redux', () => {return {
    Provider: ()=><div>Provider</div>
}});

const mockRender = jest.fn();
const mockReactDOM = {'render': mockRender};

jest.mock('react-dom', () => mockReactDOM);

describe('index', () => {
    it('should render App inside root', async function (done) {
        const element = document.createElement('div');
        element.setAttribute("id", "root");
        document.body.appendChild(element);

        import('../index.js').then(()=>{

            expect(mockRender).toHaveBeenCalledWith(<Provider store={{}}><App /></Provider>, element);

            done();
        });
    });
});

import React from 'react';

jest.mock('../App', () => ()=><div>App</div>);

describe('index', function () {
    it('should render App inside root', async function (done) {
        const element = document.createElement('div');
        element.setAttribute("id", "root");
        document.body.appendChild(element);

        import('../index.js').then(()=>{
            const actual = document.body.firstChild;

            expect(actual.innerHTML).toEqual('<div>App</div>');

            done();
        })
    });
});

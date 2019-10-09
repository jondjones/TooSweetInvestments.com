import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Footer from '../components/footer';

configure({ adapter: new Adapter() });

describe('When httpStatusLookup.getCategoryHeadings() is called', function() {
    it('then data should be returned', function() {
        const wrapper = shallow(
            <Footer />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
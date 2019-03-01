
import Button from './Button';
import Canvas from './Canvas';
import Div from './Div';
import Form from './Form';
import Header from './Header';
import Img from './Img';
import Input from './Input';
import Li from './Li';
import Main from './Main';
import Nav from './Nav';
import Span from './Span';
import Ul from './Ul';

export default function (tag) {
    switch (tag) {
        case 'button':
            return new Button();
        case 'canvas':
            return new Canvas();
        case 'form':
            return new Form();
        case 'header':
            return new Header();
        case 'img':
            return new Img();
        case 'input':
            return new Input();
        case 'li':
            return new Li();
        case 'main':
            return new Main();
        case 'nav':
            return new Nav();
        case 'span':
            return new Span();
        case 'ul':
            return new Ul();
        default:
            return new Div();
    }
}
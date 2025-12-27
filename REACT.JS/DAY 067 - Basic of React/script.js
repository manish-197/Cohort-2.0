
var h1 = React.createElement('h1',{id:'heading'},'Hello World from ReactJS');

var h2 = React.createElement('h2', null, 'this is h2 tag ');

var div = React.createElement('div', {className:'my-div'}, [h1, h2]);

var root = ReactDOM.createRoot(document.querySelector('#container'))

root.render(div);
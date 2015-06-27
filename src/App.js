var React = require('react');
var TableStore = require('./js/stores/table-store');
var Reflux = require('reflux');
var Actions = require('./js/actions/app-actions');
import {Router, Route} from 'react-router';
//import HashHistory from 'react-router/lib/HashHistory';
var HashHistory = require('react-router/lib/HashHistory');

//var HashHistory = require('react-router/lib/HashHistory');


//var DefaultRoute = Router.DefaultRoute;
var About = require('./js/components/test/about');
var Home = require('./js/components/test/home');
var Inbox = require('./js/components/test/inbox');
//var ItemDetail = require('./js/components/table/itemDetail');
//var Items = require('./js/components/table/items');
//var Form = require('./js/components/table/form');
//export default class App extends Component {
//
//  render() {
//
//    //    console.log('app');
//    //  var Child;
//    //  switch(this.props.route){
//    //      case 'about':
//    //          Child = About;break;
//    //      case 'inbox':
//    //          Child = Inbox;break;
//    //      default:
//    //          Child = Home;
//    //  }
//    //return (
//    //    <div>
//    //        <h1>Hello, world.</h1>
//    //        <Child />
//    //    </div>
//    //
//    //);
//
//  }
//}

var App = React.createClass({
    mixins:[Reflux.connect(TableStore)],

    componentDidMount(){



        //Actions.loadPage();
    },
    render(){

        return(
            <div>
                <h1>App asdfasd</h1>

                {this.props.children}

            </div>
        );
    }
});


var routes = (
   <Router history={new HashHistory}>
       <Route path='/' component={App}>
           <Route  path="about" component={About} />
           <Route path="home" component={Home} />

       </Route>
   </Router>
);


React.render(routes, document.querySelector('#root'));
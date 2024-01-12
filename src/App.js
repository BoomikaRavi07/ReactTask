import './App.css';
import Menupage from'./component/menu/Menupage';
import Personpage from'./component/person/Personpage';
import Main from './Main';
function App(){
    return(
        <div className="Resume">
            <div className='Top'>
            <h1>Profile</h1>
            </div>
            <div className='Bottom'>
                <div className='Left'><Menupage/></div>
                <div className='Right'><Personpage/></div>
            </div>
        </div>
    );

    
}
export default App;
import '@styles/main.scss'

import {Routing} from '@app/routes'
import {store} from '@shared/store'
import {Provider} from 'react-redux'


function App() {
    return (
        <div id='arm-app'>
            <Provider store={store}>
                <Routing/>
            </Provider>
        </div>
    )
}

export default App

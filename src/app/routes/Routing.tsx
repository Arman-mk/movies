import {FC} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {routes} from './route-helpers'

const Routing: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route) => {
                    return (
                        <Route key={route.key} path={route.path} element={route.component}>
                            {route.routes?.map((subRoute) => (
                                <Route
                                    key={subRoute.key}
                                    path={subRoute.path}
                                    index={subRoute.index}
                                    element={subRoute.component}
                                />
                            ))}
                            <Route path='*' element={<h1>Page not found...</h1>}/>
                        </Route>
                    )
                })}
            </Routes>
        </BrowserRouter>
    )
}

export default Routing

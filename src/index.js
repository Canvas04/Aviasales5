import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import App from './react/components/App'
import rootReducer from './redux/reducer'

const loggerMiddleWare = (store) => (next) => (action) => {
	const result = next(action)
	return result
}

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(loggerMiddleWare, reduxThunk))
)
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

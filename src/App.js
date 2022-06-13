import React from 'react'
import Landing from './pages/landing'
import {ThemeProvider} from 'styled-components'
import {theme} from './theme'

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Landing></Landing>
		</ThemeProvider>
	)
}

export default App

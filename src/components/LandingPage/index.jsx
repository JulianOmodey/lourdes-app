import React from 'react'
import * as Styled from './styled'

import LourdesIMG from '../../img/lourdes.jpg'
import BarbazulIMG from '../../img/barba.jpg'

export const LandingPage = () => {
	const message = () => {
		alert('Próximamente...')
	}
	return (
		<Styled.Container>
			<Styled.BarbazulLink onClick={message} src={BarbazulIMG}></Styled.BarbazulLink>
			<Styled.LourdesLink onClick={message} src={LourdesIMG}></Styled.LourdesLink>
		</Styled.Container>
	)
}

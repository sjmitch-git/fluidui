import { useEffect } from 'react'

export const useDisableBack = (usehook: boolean) => {
	useEffect(() => {
		if (!usehook) return
		window.history.pushState(null, document.title, window.location.href)

		function onBackButtonEvent(e: Event) {
			e.preventDefault()
		}

		window.addEventListener('popstate', onBackButtonEvent)

		return () => {
			window.removeEventListener('popstate', onBackButtonEvent)
		}
	}, [usehook])
}

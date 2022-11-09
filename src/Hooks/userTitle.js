import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Truss Plumbing`
    }, [title])
}
export default useTitle
import { useEffect, useState } from "react"

export const useMainAdmin = email => {
    const [isMainAdmin, setIsMainAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsMainAdmin(data.isMainAdmin);
                    setIsAdminLoading(false);
                })
        }
    }, [email])
    return [isMainAdmin, isAdminLoading]
}
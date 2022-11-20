import { useEffect, useState } from "react";

export function useImportImage(category){

    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(null)
    const [image,setImage] = useState(null)

    useEffect(() => {
        import(`../assets/shared/desktop/image-category-thumbnail-${category}.png`)
                    .then( img => setImage(img.default))
                    .catch(error => setError(error))
                    .finally(setLoading(false))
      },[])

    return [loading,error,image]
}
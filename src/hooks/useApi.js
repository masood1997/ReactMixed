const useApi= async (url='',reqOptions=null,errorMessage = null)=>{
    try {
      const response = await fetch(url,reqOptions) ;
      if(!response.ok) throw Error('Data not in sync with DB')
    } catch (err) {
        errorMessage=err.message;
    }finally{
        return errorMessage
    }
}

export default useApi
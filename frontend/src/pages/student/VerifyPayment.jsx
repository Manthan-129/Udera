import React, {useEffect, useContext} from 'react'
import {useSearchParams} from 'react-router-dom'
import Loading from '../../components/student/Loading'
import axios from 'axios'
import {AppContext} from '../../context/AppContext.jsx'
import { toast } from 'react-toastify'

const VerifyPayment = () => {

    const {navigate, backendUrl, token, setIsAlreadyEnrolled} = useContext(AppContext);
    const [searchParams]= useSearchParams();

    const success= searchParams.get('success');
    const purchaseId= searchParams.get('purchaseId');

    const verifyPayment= async ()=>{
        try{
            const response= await axios.post(backendUrl + '/api/user/verify-payment',{success, purchaseId},{
                headers: {Authorization: `Bearer ${token}`}
            })
            if(response.data.success){
                toast.success(response.data.message);
                setIsAlreadyEnrolled(true);
                navigate('/my-enrollments');
            }else{
                toast.error(response.data.message);
                navigate('/all-courses');
            }
        }catch(error){
            toast.error(error.message);
        }
    }

    useEffect(()=>{
        if(purchaseId){
            verifyPayment();
        }
    },[purchaseId])

  return (
    <div>
      <h2>Verifying payment...</h2>
      <Loading />
    </div>
  )
}

export default VerifyPayment
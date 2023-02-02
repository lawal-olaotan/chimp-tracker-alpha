import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldHalved, faBuildingColumns,faCirclePlus} from '@fortawesome/free-solid-svg-icons';
import {usePlaidLink, PlaidLinkOptions,PlaidLinkOnSuccess } from 'react-plaid-link';
import { useEffect, useState, useCallback} from 'react';


const IndexPage = () => {

  const [token,setLink] = useState<string>('');


 useEffect(()=>{
   // if we don't have the token create token
   createLinkToken()
 },[])


  // get plaid link token from server
  const createLinkToken = async()=>{

   const apiResponse = await fetch('/api/create-link',{
    method:'POST'
   })
   const apiToken  = await apiResponse.json();
   setLink(apiToken)
 
  }


 const onSuccess = useCallback(async (publicToken)=>{
    await fetch('/api/create-public-key',{
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ public_token: publicToken }),
    })
 },[])

 const { open,ready } = usePlaidLink({
  token,
  onSuccess
 })





  return (

    <Layout title="Welcome | Chimp Tracker">

    <div className="w-full flex flex-col h-[94%]">
        <div className="section-layout py-12">

            <div className='mb-8'>
                <h2 className='font-semibold mb-2'>Hi Lawal</h2>
                <p className='font-medium mb-4 text-sm'>Link your accounts so we can detect your subscriptions and save you from paying for things you might not need.</p>
                <span> <FontAwesomeIcon icon={faShieldHalved}/> <span className='font-bold'>CONNECT WITH OPEN BANKING</span></span>
            </div>

            <div className='w-full h-4/5 flex self-center'>
                <button onClick={()=>{open()}} disabled={!ready} className='m-auto bg-primary text-white flex items-center justify-around py-3 px-12 rounded-lg'>
                  <div className='mr-4'><FontAwesomeIcon icon={faBuildingColumns}/> <span>Connect Accounts</span></div>
                  <FontAwesomeIcon className='text-lg' icon={faCirclePlus} />
                </button>
            </div>

        </div>
    </div>
  
  </Layout>
  )
  
  }

export default IndexPage

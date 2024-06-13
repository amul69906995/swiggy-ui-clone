const getAdress=async(lng,lat)=>{
    const ApiKey=""
  const url=`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${ApiKey}`
  const res=await fetch(url)
  const data=await res.json();
  return new Promise((resolve, reject) => {
    resolve(data?.results[0]?.formatted_address)
    reject('promise rejected ')
  })
}
export default getAdress;
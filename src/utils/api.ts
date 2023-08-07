import axios from 'axios'




export const fetchData = async () => {
  try {
    const response = await axios.get('https://run.mocky.io/v3/6473e7db-26e9-4d73-bb7d-badc9733f0ee');
   ;

    localStorage.setItem('lendsqr_test_data_akeju',JSON.stringify(await response.data))
   
    
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};



const BASE_URL = Platform.OS === 'android' ? "http://192.168.0.2:8000" : "http://localhost:8000";


const response = await axios.post(`${BASE_URL}/predict-calories/`, formData, {
 headers: {
    'Content-Type': 'multipart/form-data',
 },
});

import axios from "axios";
import { useNavigate } from "react-router-dom"



export function NavigateFunctionComponent(props) {
    let navigate = useNavigate();
    SetupInterceptors(navigate);
    return <></>;
  }

const SetupInterceptors = (navigate) => {
    axios.interceptors.response.use(
        function (response) {
            // Do something with response data
            return response;
        },
        function (error) {
            // Do something with response error
            if (error.response) {
                switch (error.response.status) {
                    case 403 || 401:
                        navigate('/login')
                }
            }
            return Promise.reject(error);
        }
    );
};

export default SetupInterceptors;
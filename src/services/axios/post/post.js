import axios from 'axios';

const Post = async (url,params) => {

    let postResponse = {
        data:null,
        error:false
    }

    const response = async () => {
         await axios(url, {params:params    
        }).then((response) =>{
            postResponse = response.data;
        }).catch( error => {
            postResponse.error = error;
        });
    }
    await response(url,params);
    return postResponse;
}

export default Post;
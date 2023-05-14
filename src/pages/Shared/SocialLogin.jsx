import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className='text-center pb-5'>
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline"> G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
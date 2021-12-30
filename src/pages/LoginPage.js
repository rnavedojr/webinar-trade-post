import { useContext } from "react"
import { AuthContext } from "../context/auth"
import LoginForm from "../components/forms/LoginForm"
import { Helmet } from 'react-helmet'

const Auth = () => {

  const { auth, loginUser, userExists } = useContext(AuthContext)

  return (
    <>
      <Helmet>
        <title>Your trade was successfully submitted!</title>
      </Helmet>
      <div className='container mx-auto'>
        <LoginForm
          auth={auth}
          loginUser={loginUser}
          userExists={userExists}
        />
      </div>
    </>
  )
}

export default Auth

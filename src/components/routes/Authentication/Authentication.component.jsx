import SignInForm from '../../Sign-In-Form/Sign-In-Form.component';        
import SignUpForm from '../../Sign-Up-Form/Sign-Up-Form.component';
import './authentication.styles.scss'

const Authentication = () => {
   
  return (
    <div className='authentication-container'>
     <SignInForm/>
     <SignUpForm  />
    </div>
     
  )
}

export default Authentication;
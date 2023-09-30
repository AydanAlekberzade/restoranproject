import { useContext, useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { LangContext } from '../context/LangContext'

const user = {
  email: 'aydan04@gmail.com',
  pass: '1234'
}

const ContactLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null)
  const passRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!emailRef.current?.value || !passRef.current?.value) {
      alert('Fill out input, please!')
    } else {
      if (
        emailRef.current.value === user.email &&
        passRef.current.value === user.pass
      ) {
        alert('Welcome!')
        navigate('/shop')
      } else {
        alert('Your email or password is wrong..')
      }
    }
  }

  const [lang] =useContext(LangContext)
  return (
    <div className='contactlogin'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-6'>
          <div className='login'>
            <div
              style={{ width: '100%' }}
              className='d-flex align-items-center justify-content-center flex-column'
            >
              <h1 className='my-5'>{lang === "en" ? "Get in touch..  " : "Əlaqədə olmaq.."}</h1>

              <div className='col-4'>
                <Form onSubmit={formSubmit}>
                  <Form.Group className='mb-3'>
                    <Form.Label > {lang === "en" ? "Email address " : "E-poçt ünvanı"}</Form.Label>
                    <Form.Control className='formcontrol'
                      ref={emailRef}
                      type='email'
                      placeholder='Enter email'
                    />
                    <Form.Text className='text-muted'>
                    {lang === "en" ? "  We'll never share your email with anyone else. " : "E-poçtunuzu heç vaxt başqası ilə paylaşmayacağıq."}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className='mb-3'>
                    <Form.Label>{lang === "en" ? "Password " : "Parol"}</Form.Label>
                    <Form.Control  className='formcontrol'
                      ref={passRef}
                      type='password'
                      placeholder='Password'
                    />
                  </Form.Group>

                  <Button className='mt-3' variant='secondary' type='submit'>
                   {lang === "en" ? "  Submit " : "Təqdim"}
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div  className='col-12 col-sm-12 col-md-6'>
          <img
            src='https://soulkitchen.redsun.design/dark/wp-content/uploads/sites/3/2022/11/soulkitchen-102-870x870.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default ContactLogin



                      
import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='navbarContainer'>
            <img src='https://i.pinimg.com/originals/61/af/37/61af370544463d4b8db051d1149f830d.png' alt='logo' className='logo' />
          </div>
          <div className='header-text-container'>
            <h1 className='header-title'>Made with love</h1>
            <p className='header-subtitle'>Making delicuous food since 1002</p>
            <p className='header-subtitle'>Making delicuous food since 1002</p>
            <button className='header-button'>Reserve your place</button>
          </div>
          <div className='paper-container'>
            <div className='left-container'>
              <img src='https://d25tv1xepz39hi.cloudfront.net/2020-05-27/files/15905755410.jpg' alt='' className='paper-image-1' />
              <img src='https://d25tv1xepz39hi.cloudfront.net/2020-05-27/files/15905755410.jpg' alt='' className='paper-image-1' />
            </div>
            <div className='right-container'>
              <p className='paper-text'>Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002</p>
            </div>
          </div>
        </div>
      </div>
      <div className='body'>
        <div className='container'>
          <p className='body-text-1'>Making delicuous food since 1002Making delicuous food since elicuous food since 1002Making delicuous food since elicuous food since 1002Making delicuous food since elicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002</p>
        </div>
        <div className='special-offers-section'>
          <div className='container center-flex'>
            <h3 className='white-text'>Spacial offers</h3>
            <span className='divider' />
            <div className='cards-container'>
              <div className='card'>
                <img src='https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='' className='card-img' />
                <div className='card-footer'>
                  <h4 style={{margin: '8px 0'}}>Title</h4>
                  <p style={{margin: '0 0 8px 0'}}>Description descritpion</p>
                </div>
              </div>
              <div className='card'>
                <img src='https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='' className='card-img' />
                <div className='card-footer'>
                  <h4 style={{margin: '8px 0'}}>Title</h4>
                  <p style={{margin: '0 0 8px 0'}}>Description descritpion</p>
                </div>
              </div>
              <div className='card'>
                <img src='https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='' className='card-img' />
                <div className='card-footer'>
                  <h4 style={{margin: '8px 0'}}>Title</h4>
                  <p style={{margin: '0 0 8px 0'}}>Description descritpion</p>
                </div>
              </div>
              <div className='card'>
                <img src='https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' alt='' className='card-img' />
                <div className='card-footer'>
                  <h4 style={{margin: '8px 0'}}>Title</h4>
                  <p style={{margin: '0 0 8px 0'}}>Description descritpion</p>
                </div>
              </div>
            </div>
            <div className='paper-container paper-2'>
              <div className='left-container'>
                 <p className='paper-text'>Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002Making delicuous food since 1002</p>
              </div>
              <div className='right-container'>
                  <img src='https://d25tv1xepz39hi.cloudfront.net/2020-05-27/files/15905755410.jpg' alt='' className='paper-image-2' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='container footer-root'>
          <h1 style={{ fontSize: 70, color: 'white' }}>Lorem.</h1>
          <div className='col'>
            <p>Lorem 1</p>
            <p>Lorem 1</p>
            <p>Lorem 1</p>
            <p>Lorem 1</p>
          </div>
          <div className='col'>
            <p>Lorem 1</p>
            <p>Lorem 1</p>
            <p>Lorem 1</p>
            <p>Lorem 1</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

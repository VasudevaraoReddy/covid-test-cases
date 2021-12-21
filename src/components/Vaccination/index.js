import {Component} from 'react'
import Header from '../Header'
import Footer from '../Footer'

class Vaccination extends Component {
  render() {
    return (
      <>
        <Header activeTabId="vaccination" />
        <div>
          <h1>VACCINE</h1>
        </div>
        <Footer />
      </>
    )
  }
}

export default Vaccination

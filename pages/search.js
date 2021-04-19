import Head from 'next/head'
//import styles from '../styles/Home.module.css'
import Jumbotron from '../components/jumbotron'
import Article from '../components/article'
import Pagination from '../components/pagination'
import Sidebar from '../components/sidebar'
import Layout from '../components/layout'
import Menu from '../data-dummy/menu.json'

export default function Search({ props}) {
  return (
<Layout Layout LayoutProps = {props.menu} >
  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
   Login Page
      </h3>
      <form action="">
          <div className="from-group">
              <label htmlFor="">Isikan kata kunci disini</label>
          <input type="text" className="form-control"/></div>
      </form>
    </div>
   <Sidebar />
  </div>
  </Layout>
  )
}
Search.getInitialProps = () =>{
  return {
    props : {
      menu : Menu
    }
  }
}

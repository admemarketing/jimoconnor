import React from "react"
import Layout from "../components/layout"
 
import Twitter from "../assets/brand-logo/twitter.png"
import Insta from "../assets/brand-logo/instagram.png"
import Linkedin from "../assets/brand-logo/linkedin.png"
import SM from "../components/social-media"
import AuthorImg from "../assets/img/author.jpg"
import ContactForm from "../components/form/contact"

const Contact = () => (
  <Layout>

    <h1 id="heading-uppper-ft">Contact</h1>

  	<section className="page-wrapper">
		<div className="one-section-grid">
			<div className="grid-child" id="contact-form">
				<ContactForm />
			</div>

			<div className="contact-info-wrapper">
				<h1>Contact Information</h1>
				<p>Email: jim@jimoconnor.com.au</p>
				<p>704 / 135 Macquarie Street Sydney NSW 2000</p>
			</div>
		</div>	
  	</section>
  </Layout> 
)

export default Contact
	
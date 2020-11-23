import React from "react"
import Layout from "../components/layout"
import SM from "../components/social-media"
import AuthorImg from "../assets/img/author.jpg"

const Author = () => (
  <Layout>	

   	<h1 id="heading-uppper-ft">Author</h1>
   	
  	<section className="page-wrapper">
		
		<div className="section-grid">
			<div className="grid-child" id="book-wrapper">
				<div className="section-author">
					<img src={AuthorImg} alt="img-book" />
				</div>
			</div>

			<div className="grid-child" id="author-contents">
				<div>
					<span className="bold-em">Jim O'Connor </span>
					<p> 
						a Clinical Psychotherapist and Personal Effectiveness and author
						of the international award winning Book The Blokes Guide to Brilliant
						Cooking and How to Impress Women. Jim has a talent for teaching complicated
						subjects in fun and engaging way. He has a love of all things creative cooking
						being one of them. He is particularly interested in the psychology creativity 
						believing that if people understand the creative process, they can then tap into
						their own creativity helping them overcome the challenges their face in their day to day lives.
						Jim lives in Sydney Austrlia with his wife, two children and their dog Chilli. 
						He is longtime devotee of martial arts and practices karate at the local Dojo.
					</p>
				</div>
			</div>
		</div>
  	</section>
  </Layout> 
)

export default Author
	
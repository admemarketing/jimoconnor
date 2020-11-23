import React from "react"
import Layout from "../components/layout"
import BookImage from "../assets/books/book_cover.png"

const Books = () => (
  <Layout>

    <h1 id="heading-uppper-ft">Books</h1>

  	<section className="page-wrapper">
		<div className="section-grid">	
			<div className="grid-child" id="book-contents">
				<p>
					The Blokes Guides to Brilliant Cooking and How to impress Women 
					is a Do It Yourselft Guide to two of a Blokes most important loves,
					the love of cooking and impressing women. it's humorous guide that will
					teach you the secrets of tapping into your creative genius and make you
					laugh at the same time. You'll learn how to cook brilliant meals using your instincts,
					imagination and skill and knowledge you already have. it is full of helpful hints, tips and
					planners that make everything in the cooking process simple and easy to follow. The Blokes
					Guide to Brilliant Cooking will teach from a novice to pro how to take ideas in your head and 
					realize them on the plate. if you want to know the secrets of cooking creativity this book has you covered.
				</p>
			</div>

			<div className="grid-child" id="book-wrapper-content">
				<img src={BookImage} alt="book"/>
			</div>

		</div>
  	</section>
  </Layout> 
)

export default Books
	
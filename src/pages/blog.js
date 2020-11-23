import React from "react"
import Layout from "../components/layout"
import {graphql, useStaticQuery, Link } from 'gatsby'
import BlogComponent from '../components/blog/blog-component'


const Blog = () =>{

	 const data = useStaticQuery(
        graphql`
            query{
                allMarkdownRemark{
                    edges{
                        node{
                            frontmatter{
                                title
                                date
                            }
                            fields{
                                slug
                            }
                            html
                        }
                    }
                }
            }
        `
    )

	return(

		<>
			<Layout>

                <h1 id="heading-uppper-ft">Blog</h1>

				<section className="page-wrapper">
					<div className="section-grid-blog">
						<div className="grid-child">

						   {
                                data.allMarkdownRemark.edges.map((edge , indx)=>{

                                    if( edge.node.fields.slug != "privacy-policy" && edge.node.fields.slug != "terms-and-condition"  ){

                                        return(
                                                <>
                                                    <BlogComponent
                                                        num={`0${indx + 1}`}
                                                        title={`${edge.node.frontmatter.title}`}
                                                        date={`${edge.node.frontmatter.date}`}
                                                        content={`${edge.node.html}`}
                                                        slugPost={`${edge.node.fields.slug}`}
                                                    />
                                                </>
                                            )
                                        }
                                    }
                                )
                            }

						</div>

						<div className="grid-child">

						</div>
					</div>
				</section>
			</Layout>
		</>
	)
}

export default Blog;
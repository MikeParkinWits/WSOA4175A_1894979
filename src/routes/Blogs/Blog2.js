import React, { Component } from "react";

//Style Imports
import "../../styles/blog.css";

//Importing Helper
import { BlogList } from "../../helpers/BlogList";

//Photo Imports
import BlogPhoto from "../../assets/Blog2/BlogPicture.png";

//Component Imports
import Titles from "../../components/Titles";
import BlogReferences from "../../components/BlogReferences";
import BlogButtons from "../../components/BlogButtons";

//Import External Packages
import FadeIn from "react-fade-in"; //Used for smooth page transition load - Documentation can be found here => https://www.npmjs.com/package/react-fade-in
import Helmet from "react-helmet"; //External Package used to dynamically update the meta tags of the site - Documentation can be found here => https://www.npmjs.com/package/react-helmet

export default class Blog extends Component {
  //Scrolls the page to the top on load
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const blogInfoToLoad =
      parseInt(
        window.location.pathname.charAt(window.location.pathname.length - 1)
      ) - 1;
    console.log(BlogList[blogInfoToLoad].cardTitle);
    return (
      <>
        {/* React Helmet is used to dynamically adjust the head of the document and add meta data */}
        <Helmet>
          <title>{BlogList[blogInfoToLoad].cardTitle}</title>

          <meta
            name="title"
            property="og:title"
            content={BlogList[blogInfoToLoad].cardTitle}
          />
          <meta property="og:type" content="article" />
          <meta
            name="author"
            property="article:publisher"
            content="Michael Parkin"
          />
          <meta property="article:section" content="Theory" />
          <meta property="article:tag" content="Theory" />
          <meta
            property="og:url"
            content={`https://mikeparkinwits.github.io/wsoa4175a_1894979/Blogs/Blog${blogInfoToLoad}.html`}
          />
          <meta
            property="og:image"
            content={`https://mikeparkinwits.github.io/wsoa4175a_1894979/assets/PreviewImages/Blog${blogInfoToLoad}.svg`}
          />
          <meta
            property="og:image:alt"
            content={BlogList[blogInfoToLoad].imageAltText}
          />
          <meta
            name="description"
            property="og:description"
            content={BlogList[blogInfoToLoad].cardSummary}
          />

          {/*Google Structured Data can only be added inline as it is using JSON-LD - as noted in the w3 here: https://www.w3.org/TR/2016/REC-html51-20161101/semantics-scripting.html#the-script-element */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              name: BlogList[blogInfoToLoad].cardTitle,
              author: {
                "@type": "Person",
                name: "Michael Parkin",
              },
              url: `https://mikeparkinwits.github.io/wsoa4175a_1894979/Blogs/Blog${blogInfoToLoad}.html`,
              headline: BlogList[blogInfoToLoad].cardTitle,
              image: [
                `https://mikeparkinwits.github.io/wsoa4175a_1894979/assets/PreviewImages/Blog${blogInfoToLoad}.svg`,
              ],
              datePublished: BlogList[blogInfoToLoad].cardDate,
            })}
          </script>
        </Helmet>

        <FadeIn transitionDuration={1000}>
          <article className="page-container h-entry">
            <article>
              <Titles
                mainTitle={true}
                title={BlogList[blogInfoToLoad].cardTitle}
                subTitle={true}
                blogDate={BlogList[blogInfoToLoad].cardDate}
                blogWords={BlogList[blogInfoToLoad].blogWords}
              />
              <section className="blog-contents e-content">
                <p>
                  Although functionality has always been considered one of the
                  core building blocks of good web design, the same cannot be
                  said of a websites aesthetics. However, scholars, such as
                  Lisbeth Thorlacius in their journal article{" "}
                  <cite>The Role Of Aesthetics In Web Design</cite> (Thorlacius,
                  2007), argue that the aesthetics of a website are just as
                  important as its functionality. As such, in this blog post I
                  aim to highlight this importance by bringing to light some of
                  the main ways aesthetics aid web design. To do this, I start
                  by defining the difference between a websites functionality
                  and aesthetics. Thereafter, I highlight the four core
                  principles of aesthetics in web design that Thorlacius
                  outlines, using an example to further this understanding;
                  before concluding with my overall thoughts on aesthetics in
                  web design.
                </p>
                <p>
                  To start, before we can look at the main ways in which
                  aesthetics can be used to improve a websites design, we must
                  have a firm understanding of the terms functionality and
                  aesthetics. Whilst many define functionality in web design as
                  the number of possible actions a website allows a user to
                  perform; Jakob Nielsen, in their 2012 article{" "}
                  <cite>Usability 101: Introduction to Usability</cite>{" "}
                  (Nielsen, 2012), notes that functionality also refers to how
                  easy it is for a user to perform these actions. Web
                  aesthetics, on the other hand, refers solely to the websites
                  visual design. However, these definitions are not mutually
                  exclusive, and should instead be used in combination with one
                  another to allow for an even better web, and user, experience.
                </p>
                <p>
                  As such, we can then start to look at the four ways in which
                  aesthetics can support a websites creation and overall success
                  – according to Thorlacius (2007: 67). Firstly, she states that
                  a websites aesthetics should{" "}
                  <strong>support the senders image</strong>. To understand
                  this, we can use the example of the Apple.com homepage, as
                  seen in figure 1 below. Here, we clearly see that the site
                  makes use of a minimalistic aesthetic – matching the brand
                  identity that Apple has become known for through both their
                  products designs and ease-of-use. Secondly, the aesthetics of
                  a website should{" "}
                  <strong>relate to its content and functions</strong> – with
                  this aesthetic being used to increase its functionality. In
                  figure 1, we see that although the website is minimalistic, it
                  makes good use of semiotics to easily communicate both the
                  function of buttons, through blue text with arrows next to
                  them, and the importance of information, through a good visual
                  hierarchy.
                </p>
                <figure className="blog-figure">
                  <img className="blog-image" src={BlogPhoto}></img>
                  <figcaption>
                    Figure 1: A screenshot of Apple.com's homepage (Apple, 2021)
                  </figcaption>
                </figure>
                <p>
                  Next, Thorlacius notes that the aesthetic design of a website
                  should <cite>align with the sites genre</cite>. For example,
                  if Apple.com, a minimalistic information and e-commerce site,
                  were to swap aesthetics with Netflix.com, an entertainment
                  site that prioritizes large visuals, then many users would
                  become confused – as Netflix’s aesthetic is not conducive to
                  sales and minimalism. Lastly, she states that the aesthetics
                  should <cite>match the target audience</cite>. If Apple’s
                  target audience was an older, less technologically inclined,
                  generation then the websites visual aesthetics should consist
                  of big text and less visual signifiers – or vice versa, for a
                  younger audience. However, Apple targets all ages and thus
                  their aesthetic caters to this – making use of mid-sized fonts
                  and minimal, but effective, signs and signifiers. As such, we
                  can then conclude that, through these principles and the
                  example of the Apple.com homepage, good use of aesthetics is
                  important in web design and enhances the overall user
                  experience.
                </p>
                <p>
                  So, by using these principles we can then see that, as Anton
                  Nikolov notes in his 2017 article{" "}
                  <cite>Design principle: Aesthetics</cite>,{" "}
                  <q>
                    good looking products and user interfaces are perceived as
                    more valuable and having more qualities
                  </q>{" "}
                  (Nikolov, 2017: para. 6) – and thus, aesthetics should be
                  considered as important as functionality in a websites design.
                  However, the four aesthetic principles covered in this blog
                  post merely form the foundation for aesthetics in web design,
                  and there are countless other ideas that can be applied, in
                  addition to this, that I did not cover. But, by utilizing
                  these principles as a foundation, designers can then create
                  more impactful experiences for the user interacting with their
                  site.
                </p>
              </section>
            </article>
            <BlogReferences
              references={[
                {
                  referenceStart: "Apple. 2021. ",
                  referenceCite: <cite>Apple. </cite>,
                  referenceEnd: "[online]. https://www.apple.com",
                },
                {
                  referenceStart: "Nielsen, J. 2012. ",
                  referenceCite: (
                    <cite>Usability 101: Introduction to Usability. </cite>
                  ),
                  referenceEnd:
                    "Nielsen Norman Group. Available At: https://www.nngroup.com/articles/usability-101-introduction-to-usability/",
                },
                {
                  referenceStart: "Nikolov, A. 2017. ",
                  referenceCite: <cite>Design Principle: Aesthetics. </cite>,
                  referenceEnd:
                    "UX Des. Available At: https://uxdesign.cc/design-principle-aesthetics-af926f8f86fe",
                },
                {
                  referenceStart: "Thorlacius, L. 2007. ",
                  referenceCite: (
                    <cite>The Role of Aesthetics in Web Design. </cite>
                  ),
                  referenceEnd:
                    "Nord. Rev. 28, 63–76. https://doi.org/10.1515/nor-2017-0201",
                },
              ]}
            />
            <BlogButtons />
          </article>
        </FadeIn>
      </>
    );
  }
}

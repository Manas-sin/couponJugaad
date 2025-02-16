import React from 'react'


const Head = () => {
  return (
    <>
    {/* Meta Data */}
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title> Home - Deals and Coupon HTML Template</title>
    {/* twitter card starts from here, if you don't need remove this section */}
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@yourtwitterusername" />
    <meta name="twitter:creator" content="@yourtwitterusername" />
    <meta name="twitter:url" content="http://twitter.com" />
    <meta name="twitter:title" content="Your home page title, max 140 char" />
    {/* maximum 140 char */}
    <meta
      name="twitter:description"
      content="Your site description, maximum 140 char "
    />
    {/* maximum 140 char */}
    <meta
      name="twitter:image"
      content="assets/images/twittercardimages/twittercard-144-144.png"
    />
    {/* when you post this page url in twitter , this image will be shown */}
    {/* twitter card ends here */}
    {/* facebook open graph starts from here, if you don't need then delete open graph related  */}
    <meta property="og:title" content="Your home page title" />
    <meta property="og:url" content="http://your domain here.com" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:site_name" content="Your site name here" />
    {/*meta property="fb:admins" content="" /*/}
    {/* use this if you have  */}
    <meta property="og:type" content="website" />
    {/* 'article' for single page  */}
    <meta property="og:image" content="images/fbphoto-476-476.png" />
    {/* when you post this page url in facebook , this image will be shown */}
    {/* facebook open graph ends here */}
    {/* desktop bookmark */}
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content="assets/images/favicon/ms-icon-144x144.png"
    />
    <meta name="theme-color" content="#ffffff" />
    {/* icons & favicons */}
    <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
    {/* this icon shows in browser toolbar */}
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    {/* this icon shows in browser toolbar */}
    <link
      rel="apple-touch-icon"
      sizes="57x57"
      href="images/apple-icon-57x57.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="60x60"
      href="images/apple-icon-60x60.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="72x72"
      href="images/apple-icon-72x72.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="76x76"
      href="images/apple-icon-76x76.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="114x114"
      href="images/apple-icon-114x114.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="120x120"
      href="images/apple-icon-120x120.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="144x144"
      href="images/apple-icon-144x144.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="152x152"
      href="images/apple-icon-152x152.png"
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="images/apple-icon-180x180.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href="images/android-icon-192x192.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="images/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="images/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="images/favicon-16x16.png"
    />
    {/* Dependency Styles */}
    <link
      id="style-bundle"
      rel="stylesheet"
      href={`components/css/style-bundle.css`}
      type="text/css"
    />
    {/* Site Stylesheet */}
    <link
      id="cbx-style"
      rel="stylesheet"
      href={`components/css/style-default.css`}
      type="text/css"
    />
    {/* Google Web Fonts */}
    <link
      href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&family=Ubuntu:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
  </>
  
  )
}

export default Head
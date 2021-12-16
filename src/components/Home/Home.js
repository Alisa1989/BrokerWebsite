import React from 'react';
import "./Home.css";
import logoImage from "../../images/logo1.jpg";


const Home = () => {
    return(
        <div className="home-container">
            <h1>Home component</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies porttitor nulla et maximus. Nam placerat congue nulla, at aliquet lacus. Curabitur rutrum mattis justo. Pellentesque hendrerit ornare quam ut fringilla. Ut in tortor gravida, suscipit sapien nec, pretium risus. Donec viverra urna in fringilla iaculis. Praesent cursus eu ante ut pretium.
            Proin eros magna, congue et lacinia id, posuere sit amet orci. Curabitur ut faucibus felis, sit amet suscipit lectus. Ut vitae quam ac nisi sagittis lobortis iaculis sit amet mi. Nam lobortis enim in nisi imperdiet tincidunt. Curabitur vel purus tellus. Proin bibendum ex eu est pulvinar rutrum. Aenean ac tortor sem. Curabitur at pulvinar elit. Sed eu ante in purus pharetra iaculis. Integer condimentum vulputate mi, a pretium urna. Duis elit urna, pellentesque ac nisl id, vestibulum rutrum enim. Aliquam erat volutpat. Quisque mollis quis dolor in posuere. Vestibulum molestie sem a commodo semper. Fusce fermentum, felis nec volutpat auctor, eros ligula laoreet nisl, sit amet mollis est velit eu eros. Pellentesque non lacinia odio.
            Cras tempor, massa vitae molestie venenatis, massa ipsum vulputate nibh, a tempus neque ipsum at lacus. Suspendisse laoreet, mi vitae gravida tincidunt, nulla magna lobortis lacus, quis finibus arcu ligula non mauris. Vestibulum ut lacus odio. Cras ac sapien quis metus semper dapibus a ac turpis. Vivamus et venenatis neque, in efficitur augue. Suspendisse metus velit, gravida tincidunt euismod in, laoreet sit amet arcu. Vivamus eleifend volutpat mi, sed pharetra tellus. Morbi accumsan lectus vel dui posuere aliquam. Etiam tortor magna, congue ac aliquam a, semper eget purus. Suspendisse feugiat nec dolor a vestibulum. Proin non arcu velit. Suspendisse porttitor, arcu sit amet elementum aliquam, urna dolor iaculis turpis, ac condimentum ex lorem tempor massa. Vestibulum ac dignissim libero. Vivamus commodo egestas urna quis elementum. Sed lorem felis, vulputate non ligula eu, fermentum pharetra purus. Donec ullamcorper mattis congue.
            </p>
      <img className="navbar-image" src={logoImage} alt="logo"/>
        
        </div>
    )
}

export default Home;
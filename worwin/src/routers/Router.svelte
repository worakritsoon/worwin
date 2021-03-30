<script>
  import Router, { link } from "svelte-spa-router";
  import About from "./components/About.svelte";
  import Blog from "./components/Blog.svelte";
  import Header from "./components/Header.svelte";
  import Home from "./components/Home.svelte";
  import MenuLayout from "./components/MenuLayout.svelte";
</script>

<ion-app>
  <Header title="App" />
  <ion-nav-bar>
    <a href="/home" active use:link>View home</a>
    <a href="/about" use:link>View about</a>
    <a href="/blog/color" use:link>View blog</a>
    <a href="/menulayout" use:link>View blog</a>
  </ion-nav-bar>
  <ion-content class="ion-padding">
    <Router
      routes={{
        "/home": Home,
        "/about": About,
        "/blog/:blogName": Blog,
        "/": MenuLayout,
      }}
    />;
  </ion-content>
  <ion-footer>
    <ion-toolbar>
      <ion-title>Footer</ion-title>
    </ion-toolbar>
  </ion-footer>
</ion-app>

<style>
</style>
